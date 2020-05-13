<input type="file" accept="image/*"/>
   <script>
    readLocalFile(e) {
            let localFile = document.getElementById('uploadFile').files[0]
            if (!localFile || localFile.size == 0) {
                return
            }

            //开关控制
            this.isImg = false
            this.$refs.addSafeBtn.disabled = true
            // this.files.push(localFile)
            //获取图片base64代码
            var formData = new FormData()
            if (localFile.size / 1024 > 3073) {
                //压缩上传
                var reader = new FileReader() //新建一个FileReader对象
                var content
                var base64url
                this.files.push(localFile)
                var current = this
                content = reader.readAsDataURL(localFile, 'UTF-8') //将读取的文件转换成base64格式
                reader.onload = function(e) {
                    content = e.target.result //转换后的文件数据存储在e.target.result中
                    //   ================================================
                    let image = new Image() //新建一个img标签（还没嵌入DOM节点)
                    image.src = e.target.result
                    image.onload = function() {
                        let canvas = document.createElement('canvas'),
                            context = canvas.getContext('2d'),
                            imageWidth = image.width / 5, //压缩后图片的大小
                            imageHeight = image.height / 5,
                            data = '',
                            form = ''

                        canvas.width = imageWidth
                        canvas.height = imageHeight

                        context.drawImage(image, 0, 0, imageWidth, imageHeight)
                        data = canvas.toDataURL('image/jpeg')
                        //压缩完成
                        // console.log('压缩完成', data)
                        current.imgs.push(data)
                        form = current.dataURLtoFile(data, localFile.name)

                        formData.append('file', form)
                        current.$Equip.UploadController.fileUpload(formData)
                            .then(res => {
                                if (res.code == 0) {
                                    current.$refs.addSafeBtn.disabled = false
                                    current.$$tip({
                                        content: res.msg
                                    })
                                    current.isImg = true //可点击
                                    current.fileList.push(res.bean) //添加到
                                } else {
                                    current.$$tip({
                                        content: res.msg
                                    })
                                }
                            })
                            .catch(res => {
                                console.log(res)
                            })
                    }
                    //   ================================================
                }
            } else {
                //原图上传
                var reader = new FileReader()
                var content
                var base64url
                this.files.push(localFile)
                var current = this
                content = reader.readAsDataURL(localFile, 'UTF-8')
                reader.onload = function(event) {
                    content = event.target.result
                    base64url = event.target.result
                    current.imgs.push(content) //展示的
                }
                reader.onerror = function(event) {
                    alert('error')
                }

                formData.append('file', this.files[this.files.length - 1])
                current.$Equip.UploadController.fileUpload(formData)
                    .then(res => {
                        if (res.code == 0) {
                            this.fileList.push(res.bean) //添加到
                            this.$refs.addSafeBtn.disabled = false
                            this.$$tip({
                                content: res.msg
                            })
                            this.isImg = true //可点击
                        } else {
                            this.$$tip({
                                content: res.msg
                            })
                        }
                    })
                    .catch(res => {
                        console.log(res)
                    })
            }
        },
        //将base64转换为文件
        dataURLtoFile(dataurl, filename) {
            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n)
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n)
            }
            return new File([u8arr], filename, { type: mime })
        },
</script>

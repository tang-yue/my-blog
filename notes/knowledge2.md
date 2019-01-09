<script>
    import {
        Swipe,
        SwipeItem,
        Popup
    } from 'mint-ui'
    export default {
        data: () => ({
            server: [],
            page: 1,
            clientHeight: 0,
            el: {},
            isbottom: 0,
            show: true,
            activeIndex: 1
        }),
        created() {
            this.getServer()
        },
        beforeDestroy() {
            let title = document.querySelector("#title")
                title.style.background = "#6a7d8f";
                let arr = document.querySelector(".is-left")
                arr.style.color = "#fff"
        },
        computed: {
            isMemberId() {
                return this.$store.state.isMemberId
            }
        },
        mounted() {
            this.clientHeight = document.documentElement.clientHeight
            this.$nextTick(() => {
                let title = document.querySelector("#title")
                title.style.background = "#fff";
                let arr = document.querySelector(".is-left")
                arr.style.color = "#333"
                this.el = this.$refs.my_pull;
                window.addEventListener('scroll', this.handleScroll)
            })
        },
        methods: {
            callCustomer() {
                let msg = this.server[0].thServicePhone;
                $App.callCustomer(msg);
            },
            swipeChange() {
                this.activeIndex = this.$refs.swipe.index + 1
            },
            hidden() {
                let el = document.querySelector(".info1")
                el.style.height = "auto"
                this.show = false
            },
            pushInfo(item) {
                this.$store.dispatch("newshoppingInfo", item)
                console.log(this.$store.state.shoppingInfo);
                this.$router.push({
                    path: "/shooping/shoopingInfo",
                })
            },
            handleScroll() {
                let a = this.el.getBoundingClientRect().bottom;
                a = Math.ceil(a);
                if (a == this.clientHeight) {
                    this.isbottom = -1
                    this.page++
                        this.getServer()
                }
            },
            // 获取后台数据
            getServer() {
                $App.showWebActivity();
                this.$http.post(this.root + 'agriculture/xxxxxxxxx', {
                    key: this.zkey,
                    code: this.zcode,
                    page: this.page,
                    rows: 4,
                    townsid: sessionStorage.getItem("villageId"),
                    pUid: sessionStorage.getItem("shoppingUid")
                }, {
                    emulateJSON: true
                }).then((res) => {
                    $App.dismissWebActivity()
                    if (res.body.code == 100) {
                        if (this.page == 1) {
                            this.server = res.body.list.rows;
                        } else {
                            this.server = this.server.concat(res.body.list.rows)
                        }
                        if (res.body.list.rows.length >= 4) {
                            this.isLast = false
                        } else {
                            this.isLast = true;
                            this.isbottom = 1
                            window.removeEventListener('scroll', this.handleScroll)
                        }
                    } else {
                        $App.toastWebActivity(res.body.message)
                        console.log(res)
                    }
                }, (err) => {
                    $App.dismissWebActivity()
                })
            },
        },
    }
</script>
--------------------- 
作者：左森 
来源：CSDN 
原文：https://blog.csdn.net/qq719756146/article/details/85233822 
版权声明：本文为博主原创文章，转载请附上博文链接！
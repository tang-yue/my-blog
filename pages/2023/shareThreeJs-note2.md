threejs 笔记

### three.js 基础 简单实现一些阴影、雾化的效果
一、什么是three.js
二、渲染三维对象
  1、相机的参数
  PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
  fov — 摄像机视锥体垂直视野角度
  aspect — 摄像机视锥体长宽比
  near — 摄像机视锥体近端面
  far — 摄像机视锥体远端面
三、场景添加灯光
四、场景添加阴影效果
五、添加雾化效果

### threejs 组件 每个组件都有其独特的使用方法，可以做特定的设置
一、基础组件 Scene
Scene 的一些方法和介绍
  - add()：向场景中添加对象
  - getObjectByName()：创建对象时可以赋值一个唯一name，通过此方法可以获取该对象
  - remove()：从场景中移除一个对象  `scene.remove(sphere)`
Scene 的一些属性和介绍
  - children： 返回场景中所有对象的列表
  - fog：设置场景中雾化效果
  - overrideMaterial：强制场景中所有对象使用相同材质

二、基础组件 几何体
如何修改几何体的位置，旋转，缩放来更好的实现动画效果
 - 直接赋值
  ```js
    sphere.position = new THREE.Vector3(0,0,0);
    sphere.rotation = new THREE.Vector3(0.5 * Math.PI, 0, 0);
    sphere.scale = new THREE.Vector3(2,0,0);
  ```
- 单个赋值
  ```js
    sphere.position.x = 0
    sphere.rotation.x = 0.5 * Math.PI
    sphere.scale.x = 2
  ```
- 通过方法赋值
  ```js
  sphere.position.set(0,0,0)
  sphere.rotation.set(0.5 * Math.PI, 0, 0)
  sphere.scale.set(2,0,0)
  ```
三、正射投影相机
待会找个具体的列子
四、透视投影相机
### threejs 光源 相信光，能照亮场景的每个角落
一、光源类型
基础光源
  - 环境光（AmbientLight）：基础光源，作用在当前场景内的所有物体上
  - 点光源（PointLight）：空间中的一个点，向所有方向发射光线，如：恒星光源
  - 聚光灯光源（SpotLight）：如：灯光、手电筒等
  - 平行光（DirectionalLight）：如：太阳光照射再地球上
特殊光源
  - 半球光（HemisphereLight）：可以参考夕阳和日出时的光，创建更加自然的户外效果
  - 面光源（AreaLight）：散发光线的平面，不是一个点
二、聚光灯光源
三、环境光
四、点光源
五、平行光
六、半球光






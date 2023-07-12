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
光源效果
  - 镜面眩光（LensFlare）：不是光源，但是可以未光源添加炫光效果
二、聚光灯光源
 (1) 锥形效果，可以参考手电筒、路灯等光源。（需要设置光源位置）
 (2) 可以生成阴影

使用方式
```js
new THREE.SpotLight(color, intensity, distance, angle, exponent)
```
参数定义
| 参数名称 | 描述 | 默认值 |
| --- | --- | --- |
| color | 光源颜色 | 无 |
| intensity | 光照强度 | 1 |
| distance  | 光源照射的最大距离 | 0（无限远） |
| angle  | 光线照射范围的角度 | Math.PI/3 |
| exponent  | 控制光线强度的指数因子 | 0 |

备注：在spotLight中，光线的强度随着距离的增加而减少。exponent属性的作用是使光线在距离光源较远的地方更快的减弱。exponent越大，光线在距离光源较远的地方就会更快的减弱。

[示列代码地址](https://github.com/josdirksen/learning-threejs/blob/master/chapter-03/03-spot-light.html)

三、环境光
- 不需要设置位置，对整个场景内的对象都生效
- 没有特定的来源，也不会影响阴影的形成
- 不能作为场景内的唯一光源，需要配合其他光源使用
- 用来减弱阴影，或者给物体添加一些颜色

```js
const light = new THREE.AmbientLight( 0x404040 ); // 柔和的白光
scene.add( light );
```
[示列代码地址](https://github.com/josdirksen/learning-threejs/blob/master/chapter-03/01-ambient-light.html)

四、点光源
- 单点发光，照射所有方向的光源。（需要设置光源位置）
- 不会生成阴影。
```js
const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 50, 50, 50 );
scene.add( light );
```
参数定义
| 参数名称 | 描述 | 默认值 |
| --- | --- | --- |
| color | 光源颜色 | 无 |
| intensity | 光照强度 | 1 |
| distance  | 光源照射的最大距离 | 0（无限远） |

[示列代码地址](https://github.com/josdirksen/learning-threejs/blob/master/chapter-03/02-point-light.html) 可调整参数看到变化

五、平行光
- 平行光也可以模拟太阳光
- 会产生阴影
```js
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 ); // 第二个参数是光照强度
scene.add( directionalLight );
```
[示列代码地址](https://github.com/josdirksen/learning-threejs/blob/master/chapter-03/04-directional-light.html)

六、半球光
- 模拟室外自然光照，光源直接放置于场景之上，光照颜色从天空颜色渐变到地面光线颜色
- 不会产生阴影
```js
const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 ); // 1、天空颜色 2、地面颜色 3、光照强度
scene.add( light );
```
[示列代码地址](https://github.com/josdirksen/learning-threejs/blob/master/chapter-03/05-hemisphere-light.html)
pull request 的地方
第三章 第五小节 半球光

### threejs 材质 不同的材质能呈现出不同的效果，适合最重要

一、材质简介 下午4点28分

- 网络基础材质（MeshBasicMaterial）： 基础材质，显示几何体线框或添加简单颜色
- 网络深度材质（MeshDepthMaterial）： 根据网络到相机的距离，决定如何染色
- 网络法向材质（MeshNormalMaterial）：根据物体表面法向向量计算颜色
<!-- - 网络面材质（MeshFaceMaterial）：一种容器，可以给容器里物体的各个表面指定不同颜色 -->
- 网络朗伯材质（MeshLambertMaterial）：会考虑光照，创建暗淡的，不光亮的物体
- 网络Phong(冯氏)材质（MeshPhongMaterial）：会考虑光照，创建光亮的物体
- 着色器材质 (ShaderMaterial)：自定义着色器程序
- 直线基础材质 (LineBasicMaterial)：用于直线几何体
- 虚线材质（LineDashedMaterial）：创建虚线效果
  
材质的属性：基础属性；融合属性；高级属性

1. 基础属性

| 属性名称 | 描述 |
| --- | --- |
| id | 标识，创建物体时赋值 |
| name | 名称，可以通过此属性赋值给物体名称 |
| opacity  | 透明度恶，取值范围0 ~ 1，需要和transparent 结合使用 |
| transparent  | 是否透明，true 透明，并且可以修改透明度，false 不透明 |
| overdraw  | 过度描绘，可以消除在使用CanvasRenderer渲染物体之间的缝隙 |
| visible  | 是否可见，是否能在场景中看到此物体 |
| side  | 侧面，设置在哪一面使用材质 |
| needsUpdate  | 是否需要刷新，可以刷新材质缓存 |

2. 融合属性

决定物体如何与背景融合

| 属性名称 | 描述 |
| --- | --- |
| blending | 融合，决定物体上的材质如何与背景融合 |
| blendsrc | 融合源，创建自定义的融合模式 |
| blenddst  | 融合目标 |
| blendingequation  | 融合公式 |

3. 高级属性

控制底层webgl上下文如何渲染物体

| 属性名称 | 描述 |
| --- | --- |
| depthTest | 深度测试 |
| depthWrite | 是否影响深度缓存 |
| alphaTest  | 指定一个值，如果某个像素的值小于它，则不会将该像素展示 |

二、基础材质 MeshBasicMaterial

不会对光照产生任何反应，光照不会对它产生影响，也可以决定是否以线框的方式渲染物体

属性介绍

| 属性名称 | 描述 |
| --- | --- |
| color | 材质颜色 |
| wireframe | 是否渲染成线框 |
| wireframeLinecap  | 线段间的端点如何显示 |
| wireframeLinejoin| 线段的连接点如何显示 |
| shading| 定义如何着色 |
| vertexColors | 为每个顶点定义不同的颜色 |
| fog | 是否会受全局雾化效果设置的影响 |

[示列代码地址](https://github.com/josdirksen/learning-threejs/blob/master/chapter-04/01-basic-mesh-material.html) 
[官网演示地址](https://threejs.org/docs/index.html#api/zh/materials/MeshBasicMaterial)

三、深度材质 MeshDepthMaterial

不受光照影响，同时不能设置材质的颜色，影响它的只是摄像机到物体的距离，距离越远表现显示越暗

[示列代码地址](https://github.com/josdirksen/learning-threejs/blob/master/chapter-04/02-depth-material.html) 
[官网参数演示地址](https://threejs.org/docs/index.html#api/zh/materials/MeshDepthMaterial)

四、法向材质 MeshNormalMaterial

颜色只和表面法向向量有关，不需要生成颜色

[示列代码地址](https://github.com/josdirksen/learning-threejs/blob/master/chapter-04/04-mesh-normal-material.html) 
[官网参数演示地址](https://threejs.org/docs/index.html#api/zh/materials/MeshNormalMaterial)

<!-- 四、面材质 MeshNormalMaterial -->


五、lambert 网格材质 MeshLambertMaterial

它比其他材质多了几个参数：除color（材质颜色）之外，还有ambient（用于设置物体环境光颜色的属性），emissive（只控制物体表面的自发光颜色），

```js
const material = new THREE.MeshLambertMaterial({
  // 其他属性同上述
  ambient: 0x00ff00,
  color: 0xffffff,
  emissive: 0xff0000
})
```
[示列代码地址](https://github.com/josdirksen/learning-threejs/blob/master/chapter-04/06-mesh-lambert-material.html)
[官网参数演示地址](https://threejs.org/docs/index.html#api/zh/materials/MeshLambertMaterial)

六、phong 材质 MeshPhongMaterial

和lambert类似，光照也会影响它产生颜色，但是它能创建表面发亮的物体，可以模拟金属材质

```js
const material = new THREE.MeshPhongMaterial({
  // 其他属性同上述
  ambient: 0x00ff00,
  color: 0xffffff,
  emissive: 0xff0000,
  specular: 0x999999, // 设置物体高光颜色为灰色
  shininess: 100  // 设置物体高光锐度为100 （用于控制物体高光的大小和锐度）它的值越大，物体表面的高光越小而且更集中（更锐利），值越小，物体表面的高光越大而且更散（更模糊）
})
```
[示列代码地址](https://github.com/josdirksen/learning-threejs/blob/master/chapter-04/07-mesh-phong-material.html)
[官网参数演示地址](https://threejs.org/docs/index.html#api/zh/materials/MeshPhongMaterial)








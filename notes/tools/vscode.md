如何用vscode 提升开发效率。

vscode 支持格式化并保存 参考地址

https://cloud.tencent.com/developer/article/1720504

快速格式化： shift + option + f

2021年 2月19日 
  重新配置了 eslint + 自动保存，有个注意事项如下：
  另外，为了防止组件export default 组件的 name值被自动修复成PascalCase编码，在.eslintrc.js文件的这一行语句将error，改成off。
  
```js
"vue/name-property-casing": ["off", "PascalCase"]
```
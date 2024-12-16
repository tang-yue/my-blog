copilot 以及 vscode 使用
[github copilot官方文档](https://docs.github.com/zh/copilot)

1、安装扩展不再赘述

2、查看建议

`Tab` 接受 `Esc` 表示拒绝，接受后按Enter键进入下一行，当出现下一行代码时，再次按Tab.

3、查看替代建议

mac  `Option` + `]` 或 `Option` + `[`

4、在新选项卡中查看多个建议

`Ctrl` + `Enter`

若接受建议，在建议上方单击"接受解决方案"，若要拒绝所有建议，直接关闭选项卡

5、从注释生成代码建议

举列
```
// find all images without alternate text
// and give them a red border
function process() {}
```

6、使用框架
参考官方文档说明

7、简述下 copilot 其他的几个功能

**Editor Inline Chat** 快捷键`command + i`: 可以对选中的代码直接提问，点击刷新还可以生成一个新的回答，然后选择是否接受；也可以优化整个文件的代码。
**Explain** 如果你有看不懂的代码，可以给你解释代码逻辑。
**Fix** 代码爆红，选择quick fix，只能写基础的，如ts
**Review and Comment** review 代码，指出代码问题，给出建议，然后选择你想要建议
**Generate Docs** 生成文档式注释
**Generate Tests** 生成测试用例
**Add File to Chat** 可以多个文件
**Add Selection to Chat** 可以多个片段



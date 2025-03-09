# Cursor 使用技巧

## 基础快捷键
1. **快速聊天/编辑模式**
   - `Command + L`: 快速聊天
   - `Command + I`: Composer模式（直接修改代码）

## 项目配置相关
### 文档配置
1. **项目固定文档配置**
   - 设置 → Features → Docs → Add文件地址
   - 注：如果地址末尾是`/`，可索取下面所有内容
   - 使用方式：直接`@docs`即可

2. **代码库索引配置**
   - 路径：设置 → Features → Codebase Indexing → Resync Index
   - 作用：重新采集代码，提高响应质量
   - 工作原理：
     - 将本地代码分割成小块语音数据
     - 发送到Cursor服务器
     - 使用OpenAI的Embedding API进行嵌入
     - 将文件相对路径存储到远程矢量数据库

### 安全配置
1. **忽略文件配置**
   - .gitignore: 代码不会上传
   - `.cursorignore`: 声明忽略的文件或目录
   - 提示：可在composer中生成`.cursorignore`文件

2. **AI规则配置**
   - 路径：设置 → General → Cursor AI Rules
   - 可在composer中生成`.cursorrules`文件

## 特殊功能使用
### @命令使用
1. `@地址`: 选择Add link添加链接
2. `@web`: 查询新技术
3. `@git`: 对比两次提交差别
4. `@Notepad`: 
   - 记录开发思路
   - 保存重要代码片段
   - 维护待办事项
   - 记录历史会话
   - 注：可在资源管理器下添加Notepad
5. `@Codebase`: 检查项目代码采集情况

### Composer模式技巧
1. **代码管理**
   - `Save All`: 保存并测试代码
   - `Reject All`: 若有问题可拒绝更改
   - `Checkpoint Restore`: 回滚到上次代码

2. **需求确认技巧**
   - 让AI复述需求
   - 明确指令范围
   - 详细列出修改内容
   - 把AI当成小孩子
   - 提示：可先在chat模式讨论，将明确的需求保存在Notepad

## 使用流程建议
1. **初始设置**
   - 同步代码索引即代码库索引配置部分
   - 添加文档（需求/开发/接口）到docs
   - 创建必要配置文件 如`.cursorignore` `.cursorrules`

2. **cursor代码提交自动生成commit 信息**
   - 暂存改动
   - 使用右侧按钮生成commit信息

## 其他技巧
1. **白嫖方案**
   - 使用临时邮箱
   - 使用无限邮箱
   - 使用终端指令/可执行文件修改记录

> 注：建议在chat模式先沟通需求，将清晰的需求保存在Notepad中，再在composer中应用。同时，Notepad也可用于记录在composer中发现的问题。
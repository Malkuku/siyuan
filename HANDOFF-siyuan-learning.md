# 思源源码学习交接

日期：2026-10-14。
来源：`D:/desktop/MyProgram/kat-note`；接收方：`D:/desktop/GithubProgram/siyuan/siyuan` 工作区的 Chat。

## 目标与职责

用户明确要求将思源源码拆解与学习指导转到思源工作区，沿用接收方已有 Spec。

- 思源工作区负责源码定位、Go/Electron 必要知识讲解、行为观察与学习资料维护。
- kat-note 负责课程约束、产品范围、参照产品比较、复刻方案和后续实现；接收方回传足以支持这些判断的稳定结论。
- 当前任务是学习与拆解，不是修改思源业务或决定 kat-note 技术栈。

## 接续上下文

- 用户课程项目是《支持 AI Agent 协作的个人知识管理系统设计与实现》，当前以思源为复刻主体，Trilium 后续用于对照；具体首版范围和技术栈未定。
- 用户熟悉 OneNote 和传统文档树，有 Java 后端基础；已报告成功启动思源并了解基本程序架构，但对 Go 内核和 Electron 陌生。
- 本地 `app/package.json` 为 3.8.6；交接前核对 HEAD 为 `06236a352dd43d2ddf350b5b429dd411baed2a16`，`git describe` 为 `v3.8.6-2-g06236a3`。运行方式和环境未由发送方独立复核，无需重复安装或启动。
- 接收方已有 `Spec/AI2AI/索引.md`、`Spec/README.md` 和 `Spec/资料/01-项目总架构.md`。先沿现有索引核对资料，不另建规格体系。

## 当前停点与指导节奏

上一轮一次给出 Network、前端请求、Go API 和业务读取多个步骤，用户表示困惑，要求明确从哪一步开始。随后已缩小为：只阅读 `app/src/protyle/index.ts` 中 `private getDoc(mergedOptions: IProtyleOptions)`，观察参数组装、`fetchPost` 请求和响应交给 `onGet` 的过程。用户尚未报告完成阅读。

接收方先接住这个停点，每轮只给一个具体操作或短代码片段，待用户反馈再继续。结合 Java 解释遇到的 Go 概念，不要求先系统学完语言或框架，也不直接跳到整个调用链。

已定位的后续入口供接收方核对，不一次全部布置给用户：

- 前端：`app/src/protyle/index.ts` 的 `getDoc`，请求 `/api/filetree/getDoc`。
- 请求封装：`app/src/util/fetch.ts` 的 `fetchPost`。
- API：`kernel/api/filetree.go` 的 `getDocContract`。
- 业务：`kernel/model/file.go` 的 `GetDoc`。

## 本轮结果与回传

第一条学习链路是“打开一篇文档，正文怎样显示”。完成后用户应能结合实际请求与源码说明前端、API 和业务处理各自职责；实际捕获请求、断点观察与源码推断分别标明证据。

学习资料按接收方约定维护到 `Spec/资料/` 并更新其索引。后续追踪编辑保存与数据表示，范围按学习进展调整。

向 kat-note 回传已完成主题、正式资料路径、关键结论及待研究问题；重点保留文档树/块模型、保存与检索机制中会影响复刻取舍的事实。课程计划无需在思源工作区复制。

有效结论落入双方对应正式文档，交接任务完成并验收后删除本临时文件。

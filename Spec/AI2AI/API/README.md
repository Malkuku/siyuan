# API 与数据契约索引

## 权威入口

| 边界 | 维护入口 | 说明 |
|---|---|---|
| 内核 HTTP | [契约维护规范](../../../docs/API-CONTRACTS.zh-CN.md)、[契约源码](../../../kernel/apicontract/)、[路由](../../../kernel/api/router.go) | 请求、响应、错误、授权与兼容；端点行为写在相应声明注释中 |
| 公开 API 使用 | [中文](../../../docs/API.zh-CN.md)、[英文](../../../docs/API.md)、[日文](../../../docs/API.ja.md) | 现有公开说明；新端点仅在用户要求时增补这些文档 |
| 前端传输 | [fetch 工具](../../../app/src/util/fetch.ts)、[类型目录](../../../app/src/types/) | 前端调用及共享声明；生成声明不得手改 |
| 插件契约 | [跨仓库规则](../../../AGENTS.md) | `petal` 对应公开声明及注释；变更同时维护其 CHANGELOG |
| WebSocket 与服务协议 | [服务入口](../../../kernel/server/serve.go)、[推送工具](../../../kernel/util/websocket.go)、[前端连接](../../../app/src/layout/Model.ts) | 属于独立传输边界；消息与生命周期须按具体任务核对 |
| 文档与持久化 | [文档格式](../../../docs/SY-FORMAT.zh-CN.md)、[工作区](../../../docs/WORKSPACE.zh-CN.md)、[加密笔记本](../../../docs/ENCRYPTED-NOTEBOOK.zh-CN.md) | 数据格式、存储位置、认证与恢复 |

## HTTP 变更路径

按业务领域选择 `kernel/apicontract/` 中对应声明，核对 `kernel/api/` 处理器及模型行为。新端点通过 `contractHandler` 接入；保留输入兼容、响应变体、授权与加密笔记本租约，不向旧路由列表添加记录。

从 `app/` 执行 `pnpm run api:generate --petal ../../petal` 和 `pnpm run api:check --petal ../../petal`，同步 Petal 公开声明与变更记录，再执行 [测试方案](../测试方案.md) 中的相关检查。例行端点变更不向契约维护指南追加端点说明或测试记录，任务验证结果记录在任务或 PR 中。

接口语义、协议与持久化契约沿用以上来源；后续领域 API 文档仅补充缺失边界，并在此登记。

---
name: Todo App Developer & Deployer
version: 1.0.0
description: 帮助开发和部署 todo-app 到 GitHub Actions 的标准流程和最佳实践
author: Your Name
tags:
  - todo-app
  - github-actions
  - deployment
  - web-development
---

# Todo App Developer & Deployer Skill

这个 Skill 提供了开发和部署 todo-app 到 GitHub Actions 的完整流程和标准模板。

## 功能概述

当用户需要开发或部署 todo-app 时，使用此 Skill 可以：

1. **项目初始化**：按照标准结构创建 todo-app 项目
2. **GitHub Actions 配置**：自动生成 CI/CD 工作流文件
3. **部署流程**：配置自动部署到 GitHub Pages、Vercel 或其他平台
4. **代码规范**：确保代码符合最佳实践

## 使用场景

- 创建新的 todo-app 项目
- 为现有项目添加 GitHub Actions 自动部署
- 更新部署配置
- 修复部署问题

## 项目结构标准

```
todo-app/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 工作流
├── src/                        # 源代码目录
├── public/                     # 静态资源
├── package.json                # 项目配置
├── README.md                   # 项目说明
└── .gitignore                 # Git 忽略文件
```

## GitHub Actions 工作流模板

### 基础部署流程

1. **触发条件**：
   - 推送到 main/master 分支
   - 创建 Pull Request
   - 手动触发

2. **构建步骤**：
   - 安装依赖
   - 运行测试
   - 构建项目

3. **部署步骤**：
   - 部署到 GitHub Pages
   - 或部署到 Vercel/Netlify
   - 发送部署通知

## 最佳实践

### 1. 环境变量管理
- 使用 GitHub Secrets 存储敏感信息
- 区分开发、测试、生产环境

### 2. 构建优化
- 启用缓存加速构建
- 并行执行任务
- 失败时快速反馈

### 3. 部署策略
- 使用分支保护规则
- 部署前运行测试
- 支持回滚机制

## 常用命令

```bash
# 初始化项目
npm init -y

# 安装依赖
npm install

# 运行开发服务器
npm run dev

# 构建生产版本
npm run build

# 运行测试
npm test
```

## 注意事项

1. 确保 GitHub Actions 有足够权限
2. 检查部署目标平台的配置
3. 验证环境变量是否正确设置
4. 监控部署日志和错误

## 故障排查

- **构建失败**：检查依赖版本和 Node.js 版本
- **部署失败**：验证权限和配置文件
- **测试失败**：检查测试环境和数据

# Todo App

一个现代化的待办事项应用，支持自动部署到 GitHub Pages。

## 功能特性

- ✅ 添加、编辑、删除待办事项
- ✅ 标记完成状态
- ✅ 数据持久化存储
- ✅ 响应式设计
- ✅ 自动部署到 GitHub Pages

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署

项目配置了 GitHub Actions 自动部署：

1. 推送到 `main` 或 `master` 分支时自动触发
2. 构建项目并运行测试
3. 自动部署到 GitHub Pages

### 启用 GitHub Pages

1. 进入仓库的 Settings
2. 找到 Pages 设置
3. 选择 Source: GitHub Actions
4. 保存设置

## 技术栈

- React 18
- Vite
- GitHub Actions
- GitHub Pages

## Skills 支持

本项目包含一个 Claude Skills，用于标准化开发和部署流程：

- Skill 位置：`.claude/skills/todo-app-deployer/`
- 包含模板、示例和最佳实践

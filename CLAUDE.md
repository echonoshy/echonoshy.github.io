# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

个人主页（echonoshy.github.io），Vite + Vue 3 + TypeScript，pnpm 管理依赖。

## Commands

```bash
pnpm install          # 安装依赖
pnpm dev              # 本地开发
pnpm build            # 构建生产版本
```

## Architecture

- `src/views/` — 页面组件（Home, Posts, PostDetail, About）
- `src/components/` — 复用组件（NavBar, PostCard, TagFilter, TypeWriter, Footer）
- `src/utils/` — 工具函数（markdown 解析、彩蛋逻辑）
- `src/router/` — Vue Router 路由配置
- `public/posts/` — Markdown 日志文件 + index.json 索引

## Content System

日志用 Markdown 写在 `public/posts/` 下，frontmatter 包含 title/date/tags。`index.json` 作为索引，运行时 fetch 加载。

## Design

Anthropic/Claude 风格：暖米色背景、衬线标题+无衬线正文、大量留白、克制的暖橙点缀色。游戏/极客元素藏在细节里（彩蛋、微交互）。

## Deployment

GitHub Actions 构建，部署到 GitHub Pages。主分支 `master`。

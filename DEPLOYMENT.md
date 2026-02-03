# 部署到 GitHub Pages

本文档说明如何将网站部署到 GitHub Pages。

## 自动部署（推荐）

网站已配置 GitHub Actions 自动部署流程。每次推送到 `main` 分支时，会自动：

1. 初始化子模块（拉取手册内容）
2. 安装 Typst 和中文字体
3. 编译手册为 PDF
4. 构建 VitePress 网站
5. 部署到 GitHub Pages

### 配置步骤

1. **启用 GitHub Pages**
   - 打开仓库设置：`https://github.com/HumpbackLab/website/settings/pages`
   - 在 "Source" 下拉菜单中选择 **GitHub Actions**

2. **推送代码**
   ```bash
   git add .
   git commit -m "Add deployment workflow"
   git push
   ```

3. **查看部署状态**
   - 访问 Actions 页面：`https://github.com/HumpbackLab/website/actions`
   - 等待部署完成（通常需要 3-5 分钟）

4. **访问网站**
   - 部署完成后，网站将发布到：`https://humpbacklab.github.io/website/`

## 自定义域名（可选）

如果你有自己的域名：

1. 在仓库根目录创建 `public/CNAME` 文件：
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. 在 `.vitepress/config.mts` 中添加 base 配置（如果使用子路径）：
   ```ts
   export default defineConfig({
     base: '/',  // 自定义域名使用 '/'
     // ...
   })
   ```

3. 在域名提供商处配置 DNS：
   - 类型：`A` 记录
   - 主机：`@` 或留空
   - 值：
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

4. 或使用 CNAME 记录：
   - 类型：`CNAME`
   - 主机：`www`
   - 值：`humpbacklab.github.io`

## 手动部署

如果需要手动部署：

```bash
# 1. 编译手册
npm run build:manuals

# 2. 构建网站
npm run build

# 3. 部署到 gh-pages 分支
npx gh-pages -d .vitepress/dist
```

## 工作流配置说明

GitHub Actions 工作流位于 `.github/workflows/deploy.yml`，包含以下步骤：

- **Checkout**: 拉取代码和子模块
- **Setup Node**: 安装 Node.js 环境
- **Setup Typst**: 安装 Typst 编译器
- **Install fonts**: 安装中文字体（Noto Sans CJK）
- **Install dependencies**: 安装 npm 依赖
- **Build manuals**: 编译手册为 PDF
- **Build site**: 构建 VitePress 网站
- **Deploy**: 部署到 GitHub Pages

## 故障排查

### 部署失败

1. 检查 Actions 日志：`https://github.com/HumpbackLab/website/actions`
2. 确认 GitHub Pages 已启用且 Source 设置为 "GitHub Actions"
3. 确认仓库有 Pages 权限

### 子模块未更新

如果手册内容没有更新：

```bash
# 更新子模块
git submodule update --remote --merge

# 提交并推送
git add manuals/
git commit -m "Update manual submodules"
git push
```

### 字体缺失警告

GitHub Actions 已自动安装字体，本地测试可运行：
```bash
bash scripts/install-fonts.sh
```

## 注意事项

- 首次部署可能需要 5-10 分钟
- 后续部署通常在 3-5 分钟内完成
- PDF 文件较大，会增加构建时间
- 子模块更新需要手动触发或配置定时任务

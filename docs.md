# 改进文档

## 改进内容

- 修复手机端文章标题过长导致的排版问题
- 原图标无法显示，替换图标库为remixicon
- 增加自动识别设备深浅色主题
- 增加友链模板
- 增加自动在中英文之间插入空格功能
- 增加萌备支持
- 美化滚动条
- 增加文章封面配置项
- 增加文章到期提示


## 使用方法

### 友链
使用 hexo cli 创建一个友链页面
```bash
hexo new page links
```
在你新建的页面顶部的 front-matter 中，增加以下配置
```yaml
layout: links
links:
- link:
    title: 网站名称
    url: 网站链接
    img_url: 网站图标链接
    text: 网站描述
```

### 自动插入空格
全局设置：  
在 `_config.vivia.yml` 中，修改以下配置
```yaml
auto_spacing: true
```

文章单独配置：   
在文章顶部的 front-matter 中，增加以下配置
```yaml
auto_spacing: true
```

### 萌备
在 `_config.vivia.yml` 中，修改以下配置
```yaml
moe_icp:
  enable: true
  number: 你的萌备号
```

### 文章封面
在文章顶部的 front-matter 中，增加以下配置
```yaml
cover: 文章封面图片链接
```

### 文章到期提示
> 作用为在你文章上面显示一个"此文章距发布之日起已过去 n 天，其中某些内容可能已经过时失效"

全局设置：  
在 `_config.vivia.yml` 中，修改以下配置
```yaml
expired: 多少天后过期
```
文章单独配置：  
在文章顶部的 front-matter 中，增加以下配置
```yaml
expired: 多少天后过期
```
Tips：
- 文章单独配置不受全局功能开关影响
- expired为0时即为永不过期

## 安装
```bash
# Clone the theme into the /themes/vivia directory
git clone https://github.com/lingxh/hexo-theme-vivia.git themes/vivia

# Install the required dependencies
npm install colorjs.io stylus hexo-symbols-count-time
```

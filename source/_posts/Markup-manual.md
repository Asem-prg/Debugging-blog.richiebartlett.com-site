---
title: Markup Manual
date: 2021-05-28 16:45:12
updated: 2022-03-29 21:50:01
description: 'Testing custom HEXO tags'
comments: true
lang: en_US
toc: true
tocOpen: true
indexing: true
home_posts_tag: false
swiper: true
swiperDesc: Testing custom HEXO tags
swiperImg: /img/1.jpg
img: /img/Tokyo_summer_sky.jpg
top: false
donate: false
share: false
geolocation: Japan
tags: [hexo-blog, Vimeo, YouTube, Gist]
categories: 
---


# Testing out the documented features of HEXO & JS in the bamboo theme
 Consolidated from: https://yuang01.gitee.io/ <!-- #2021/02/08/hexo-theme-bamboo-new/ -->
 The purpose of this post is to see if everything documented actually works...

## Progess bars 进度条
### 进度条示例
{% progress 70 danger 进度条测试 %}
{% progress 60 info 进度条测试 %}
{% progress 60 success 进度条测试 %}
{% progress 60 warning 进度条测试 %}
{% progress 60 primary 进度条测试 %}

## galleryGroup图片示例

<div class="gallery-group-main">
    {% galleryGroup '壁纸' '收藏的一些壁纸' '/gallery/bizhi' https://pic1.zhimg.com/80/v2-23c3820e8abfb1cef689531af2dc6d09_1440w.jpg?source=1940ef5c %}
    {% galleryGroup '古典图片' '中国古典图片' '/gallery/gudian' https://pic1.zhimg.com/80/v2-8d542d68cbbf0e5f503da9e3f72b8447_1440w.jpg?source=1940ef5c %}
    {% galleryGroup '风景' '风景图片' '/gallery/fengjing' https://pic1.zhimg.com/80/v2-56164ef0695767475935c9e019c594ae_1440w.jpg?source=1940ef5c %}
</div>



## gallery图片
Requires fancybox.js true

### 一行一个图片
{% gallery %}
![图片描述](https://pic4.zhimg.com/80/v2-515859a54d7c9b89c070c6132dff4527_1440w.jpg?source=1940ef5c)
{% endgallery %}

### 一行多个图片（不换行）
{% gallery %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
{% endgallery %}

### 多行多个图片（每行2～8个图片）
{% gallery stretch, 4 %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
{% endgallery %}


### 多行多个图片（每行2～8个图片）
{% gallery stretch, 8 %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-d0fe3a2cc79628c6a017f0066d4dee63_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-f7d6c7021cff3e23d8481faec2048890_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-d191b620ff97a55b634786528206002a_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-d0fe3a2cc79628c6a017f0066d4dee63_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-f7d6c7021cff3e23d8481faec2048890_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-d191b620ff97a55b634786528206002a_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-d0fe3a2cc79628c6a017f0066d4dee63_1440w.jpg?source=1940ef5c)
![图片描述](https://pic4.zhimg.com/80/v2-f7d6c7021cff3e23d8481faec2048890_1440w.jpg?source=1940ef5c)
{% endgallery %}


### 组合使用
{% gallery %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
{% endgallery %}
{% gallery %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-c513cb0d2eff43b5391ea682f1ba07c6_1440w.jpg?source=1940ef5c)
{% endgallery %}
{% gallery %}
![图片描述](https://pic2.zhimg.com/80/v2-bcb819edb98e081817066eb6b0e6a2ef_1440w.jpg?source=1940ef5c)
![图片描述](https://pic2.zhimg.com/80/v2-f1b467abef1caeb5537f399da4ddbc9d_1440w.jpg?source=1940ef5c)
{% endgallery %}


## Accordian box
{% folding 查看图片测试 %}
  ![](https://pic4.zhimg.com/80/v2-5e0b1aaa1994f6d7cb9aac94a6f4e0b3_1440w.jpg)
{% endfolding %}

### cyan青色-默认打开
{% folding cyan open, 查看默认打开的折叠框 %}

  这是一个默认打开的折叠框。

{% endfolding %}

### 查看代码
{% folding green, 查看代码测试 %}
这里写代码高亮部分
{% endfolding %}

### 查看列表
{% folding yellow, 查看列表测试 %}

  - haha
  - hehe

{% endfolding %}

### 查看嵌套
{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://image.dbbqb.com/202101221115/7cdd741907c2ea150d054d24c4da6594/4d0G' ></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}


## buttons 

### 融入段落中按钮
不设置任何参数的 {% btn 按钮, / %} 适合融入段落中。

不设置任何参数的 {% btn warning, 按钮, / %} 适合融入段落中。

不设置任何参数的 {% btn info, 按钮, / %} 适合融入段落中。

不设置任何参数的 {% btn success, 按钮, / %} 适合融入段落中。

不设置任何参数的 {% btn danger, 按钮, / %} 适合融入段落中。

### 空心和实心按钮
{% btn hollow, 示例博客, https://baidu.com, fa fa-qq %}
{% btn solid, 示例博客, https://baidu.com, fa fa-weixin %}

### 大点的按钮和样式

{% btn center large, 开始使用, https://baidu.com, fa fa-download %}

### 环形按钮

{% btn center large round solid, 开始使用, https://baidu.com, fa fa-download %}

### warning等颜色按钮

{% btn large round solid warning, 开始使用, https://baidu.com, fa fa-download %}
{% btn large round solid info, 开始使用, https://baidu.com, fa fa-download %}
{% btn large round solid success, 开始使用, https://baidu.com, fa fa-download %}
{% btn large round solid danger, 开始使用, https://baidu.com, fa fa-download %}
{% btn large solid success, 开始使用, https://baidu.com, fa fa-download %}

### warning等颜色空心按钮

{% btn large warning hollow, 开始使用, https://baidu.com, fa fa-download %}
{% btn large info hollow, 开始使用, https://baidu.com, fa fa-download %}
{% btn large success hollow, 开始使用, https://baidu.com, fa fa-download %}
{% btn large danger hollow, 开始使用, https://baidu.com, fa fa-download %}
{% btn success hollow, 开始使用, https://baidu.com, fa fa-download %}

### warning等颜色空心环形居中按钮

{% btn large danger hollow center round, 开始使用, https://baidu.com, fa fa-download %}
{% btn danger hollow center round, 开始使用, https://baidu.com, fa fa-download %}

### 带有头像和名称的按钮

{% btns circle grid2 %}
  {% cell 草帽海贼团, https://baidu.com, https://img2.woyaogexing.com/2021/01/30/007e3777e7e64c4aae95ae812708a7bf!400x400.jpeg %}
  {% cell 小绵羊, https://baidu.com, https://img2.woyaogexing.com/2021/01/30/4c59f9dd4aae421fae21344aec8c7b60!400x400.jpeg %}
  {% cell 沫兮, https://baidu.com, https://img2.woyaogexing.com/2021/01/30/1b2aec116f0b49c682badc5befd43905!400x400.jpeg %}
  {% cell 凯爹, https://baidu.com, https://p.qqan.com/up/2021-1/16112058848478910.jpg %}
  {% cell 阿离, https://baidu.com, https://p.qqan.com/up/2021-1/16118869719896010.jpg %}
  {% cell 韩信, https://baidu.com, https://p.qqan.com/up/2021-1/16118869704182020.jpg %}
{% endbtns %}

### 一行三个
{% btns circle grid3 %}
  {% cell QQ头像, https://baidu.com, http://q1.qlogo.cn/g?b=qq&nk=1730241541&s=640 %}
  {% cell 随机动漫头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=c1&format=images %}
  {% cell 随机男生头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=a1&format=images %}
  {% cell 随机女生头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=b1&format=images %}
  {% cell 随机动漫女头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=c2&format=images %}
  {% cell 随机动漫男头像, https://baidu.com, http://api.btstu.cn/sjtx/api.php?lx=c3&format=images %}
{% endbtns %}

### 一行四个
{% btns circle grid4 %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
  {% cell 随机Github头像, https://baidu.com, https://api.prodless.com/avatar.png %}
{% endbtns %}

### 一行五个
{% btns circle grid5 %}
  {% cell 随机头像, https://baidu.com, https://picsum.photos/200 %}
  {% cell 随机头像id, https://baidu.com, https://picsum.photos/id/1/200 %}
  {% cell 随机头像id, https://baidu.com, https://picsum.photos/id/2/200 %}
  {% cell 随机头像id, https://baidu.com, https://picsum.photos/id/3/200 %}
  {% cell 随机头像id, https://baidu.com, https://picsum.photos/id/4/200 %}
{% endbtns %}

{% btns circle grid5 %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
  {% cell 随机风景, https://baidu.com,   https://api.ixiaowai.cn/gqapi/gqapi.php %}
{% endbtns %}

### Rounded buttons 环形图标按钮
{% btns rounded grid5 %}
  {% cell 下载源码, /, fa fa-download %}
  {% cell 查看文档, /, fa fa-book %}
{% endbtns %}

### 环形图标居中按钮
{% btns rounded grid5 center %}
  {% cell 下载源码, /, fa fa-download %}
  {% cell 查看文档, /, fa fa-book %}
{% endbtns %}


### 环形图标填充按钮

{% btns rounded grid5 fill %}
  {% cell 下载源码, /, fa fa-download %}
  {% cell 查看文档, /, fa fa-book %}
{% endbtns %}


### Card views 圆形图标按钮
{% btns circle center grid5 %}
  <a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
    <i class='fa fa-apple'></i>
    <b>这个是微信</b>
    {% p red, 微信 %}
    <img src='/medias/wx.jpg'>
  </a>
  <a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
    <i class='fa fa-apple'></i>
    <b>这个是支付宝</b>
    {% p green, 支付宝 %}
    <img src='/medias/zfb.jpg'>
  </a>
{% endbtns %}

## audio音频
{% audio http://qiniu.cunzhuang.top/%E5%85%AD%E5%93%B2%20-%20%E4%BD%A0%E7%9A%84%E5%BF%83%E6%98%AF%E5%90%A6%E4%B9%9F%E6%9C%89%E6%88%91%E7%9A%84%E5%90%8D.mp3 %}

## checkbox进度条示例
{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}

## accordians折叠

### 基本
{% folding 查看图片测试 %}
  ![](https://pic4.zhimg.com/80/v2-5e0b1aaa1994f6d7cb9aac94a6f4e0b3_1440w.jpg)
{% endfolding %}

### cyan青色-默认打开
{% folding cyan open, 查看默认打开的折叠框 %}

  这是一个默认打开的折叠框。

{% endfolding %}

### 查看代码
{% folding green, 查看代码测试 %}
这里写代码高亮部分
{% endfolding %}

### 查看列表
{% folding yellow, 查看列表测试 %}

  - haha
  - hehe

{% endfolding %}


### 查看嵌套
{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://image.dbbqb.com/202101221115/7cdd741907c2ea150d054d24c4da6594/4d0G' ></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}



## lineImage标签

### 段落中插入图片
这是 {% inlineimage http://img.doutula.com/production/uploads/image/2019/08/15/20190815849485_fKMqYD.gif %} 一段话。

这又是 {% inlineimage http://img.doutula.com/production/uploads/image/2019/08/15/20190815849485_fKMqYD.gif, height=40px %} 一段话。

这又是 {% inlineimage http://img.doutula.com/production/uploads/image/2019/08/15/20190815849485_fKMqYD.gif, height=100px %} 一段话。

### 自定义图片并添加描述

{% image https://pic2.zhimg.com/80/v2-cc93c338d57783702bea4506aee7007d_1440w.jpg?source=1940ef5c, alt=自定义图片 %}

### 指定宽度
{% image https://api.ixiaowai.cn/gqapi/gqapi.php, width=400px, alt=随机生成风景（alt描述可有可无） %}
{% image https://api.ixiaowai.cn/api/api.php, width=400px, alt=随机生成二次元壁纸 %}


### 设置占位背景色
{% image  https://api.ixiaowai.cn/mcapi/mcapi.php, width=400px, bg=#1D0C04, alt=随机生成呆萌酱 %}

## Link标签
### 超链接标签
{% link 如何参与项目, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 如何参与项目, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

### 上述事例代码
{% linkgroup %}
{% link 如何参与项目, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 如何参与项目, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 如何参与项目, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}

{% link 如何参与项目, http://www.baidu.com, https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754__340.jpg %}
{% endlinkgroup %}


## Note标签
### note演示效果
> markdown默认写法，左边框颜色，随着主题色改变

{% note, 我有一只小毛驴，我从来都不骑。 %}

{% note quote, 适合引用一段话 %}

{% note warning, 这是一个警告 %}

{% note danger, 这是一个错误 %}

{% note success, 这是一个成功 %}

{% note info, 这是一个信息 %}

## noteblock演示效果
{% noteblock base, 标题（可选） %}
    noteblock base
{% endnoteblock %}

{% noteblock quote, 标题（可选） %}
    noteblock quote
{% endnoteblock %}

{% noteblock warning, 标题（可选） %}
    noteblock warning
{% endnoteblock %}

{% noteblock success, 标题（可选） %}
    noteblock success
{% endnoteblock %}

{% noteblock danger, 标题（可选） %}
    noteblock danger
{% endnoteblock %}

{% noteblock info, 标题（可选） %}
    noteblock info
{% endnoteblock %}


## 段落文本
### 段落文本演示
{% p yellow, 我是一个文本高亮大萨达所多撒多撒多撒大多多撒多撒多撒大所多撒大多 %}
{% p, 我是一个文本高亮大萨达所多撒多撒多撒大多多撒多撒多撒大所多撒大多 %}
{% p primary, 我是一个文本高亮大萨达所多撒多撒多撒大多多撒多撒多撒大所多撒大多 %}
{% p info, 我是一个文本高亮大萨达所多撒多撒多撒大多多撒多撒多撒大所多撒大多 %}
{% p warning, 我是一个文本高亮大萨达所多撒多撒多撒大多多撒多撒多撒大所多撒大多 %}
{% p danger, 我是一个文本高亮大萨达所多撒多撒多撒大多多撒多撒多撒大所多撒大多 %}
{% p success, 我是一个文本高亮大萨达所多撒多撒多撒大多多撒多撒多撒大所多撒大多 %}
{% p red, 我是一个文本高亮大萨达所多撒多撒多撒大多多撒多撒多撒大所多撒大多 %}
{% p green, 我是一个文本高亮大萨达所多撒多撒多撒大多多撒多撒多撒大所多撒大多 %}
{% p blue, 我是一个文本高亮大萨达所多撒多撒多撒大多多撒多撒多撒大所多撒大多 %}
{% p center, 我是一个文本高亮大萨达所多撒多撒多撒大多多撒多撒多撒大所多撒大多 %}
{% p center large danger, 我是一个文本高亮大萨达所多撒多撒多撒大多多撒多撒多撒大所多撒大多 %}
{% p center large info, 我是一个文本高亮大萨达所多撒多撒多撒大多多撒多撒多撒大所多撒大多 %}
{% p center small, 我是一个文本高亮大萨达所多撒多撒多撒大多多撒多撒多撒大所多撒大多 %}

## 文本高亮
### 文本高亮演示效果
这是一个简单的文字{% pbg yellow, 我是一个文本高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% pbg, 我是一个文本高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% pbg info, 我是一个文本高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% pbg warning, 我是一个文本高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% pbg danger, 我是一个文本高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% pbg success, 我是一个文本高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% pbg red, 我是一个文本高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% pbg green, 我是一个文本高亮 %}，唱着我们心肠的曲折 
这是一个简单的文字{% pbg blue, 我是一个文本高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% pbg cyan, 我是一个文本高亮 %}，唱着我们心肠的曲折


## radio
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}
{% radio warning, warning色 %}
{% radio success, success色 %}
{% radio danger, danger色 %}
{% radio info, info色 %}

## site-card演示
{% sitegroup %}
{% site WDZ, url=http://jackwdz.cn/, screenshot=https://ae03.alicdn.com/kf/H76c7b00a3256475ea5836dbc7aa5d1858.jpg, avatar=https://s3.ax1x.com/2021/01/18/scuMVO.jpg, description=这是一个喜爱二次元的小伙伴博客 %}
{% site Ayu, url=https://yuang01.gitee.io/, screenshot=https://ae03.alicdn.com/kf/H2f17ecc91fe949c2b00c6192587b6076N.jpg, avatar=http://q1.qlogo.cn/g?b=qq&nk=1730241541&s=640, description=这是我的博客 %}
{% site WDZ, url=http://jackwdz.cn/, screenshot=https://ae03.alicdn.com/kf/H76c7b00a3256475ea5836dbc7aa5d1858.jpg, avatar=https://s3.ax1x.com/2021/01/18/scuMVO.jpg, description=这是一个喜爱二次元的小伙伴博客 %}
{% site yuang01, url=https://yuang01.gitee.io/, screenshot=https://ae03.alicdn.com/kf/H2f17ecc91fe949c2b00c6192587b6076N.jpg, avatar=http://q1.qlogo.cn/g?b=qq&nk=1730241541&s=640, description=这是我的博客 %}
{% site WDZ, url=http://jackwdz.cn/, screenshot=https://ae03.alicdn.com/kf/H76c7b00a3256475ea5836dbc7aa5d1858.jpg, avatar=https://s3.ax1x.com/2021/01/18/scuMVO.jpg, description=这是一个喜爱二次元的小伙伴博客 %}
{% endsitegroup %}


## text color 文字颜色
这是一个简单的文字{% span yellow, 我是一个文字高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% span, 我是一个文字高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% span primary, 我是一个文字高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% span info, 我是一个文字高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% span warning, 我是一个文字高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% span danger, 我是一个文字高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% span success, 我是一个文字高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% span red, 我是一个文字高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% span green, 我是一个文字高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% span blue, 我是一个文字高亮 %}，唱着我们心肠的曲折
{% span center green, 我是一个居中文字高亮 %}
这是一个简单的文字{% span large, 我是一个文字高亮 %}，唱着我们心肠的曲折
这是一个简单的文字{% span small danger, 我是一个文字高亮 %}，唱着我们心肠的曲折

## tab事例
{% tabs tab-id %}

<!-- tab 栏目1 -->

。。。

<!-- endtab -->

<!-- tab 栏目2 -->

！！！

<!-- endtab -->

{% endtabs %}


## Text文本样式标签
{% title h2, Text文本样式标签演示 %}

带 {% u 下划线 %} 的文本

带 {% emp 着重号 %} 的文本

带 {% wavy 波浪线 %} 的文本

带 {% del 删除线 %} 的文本

键盘样式的文本 {% kbd command %} + {% kbd D %}

密码样式的文本：{% psw 这里没有验证码 %}

## timeline时间线演示
{% timeline %}

{% timenode 2021-01-01 [1.0.3 -> 1.0.3](https://github.com/yuang01/hexo-theme-bamboo) %}

1. 我是一个测试文字`ghghgh`。
2. 我是一个测试问题二'qweqw'，请问企鹅请问请问佛挡杀`fgfgf`佛第三节课。
2. 我是一个测试问题三'fgfgfg'，请问企鹅请问请问佛挡杀`trtrtr`佛第三节课。

{% endtimenode %}

{% timenode 2020-08-15 [1.0.2 -> 1.0.2](https://github.com/yuang01/hexo-theme-bamboo) %}

这是一段测试文字

{% endtimenode %}

{% timenode 2020-08-08 [1.0.0 -> 1.0.0](https://github.com/yuang01/hexo-theme-bamboo) %}

1. 我是一个测试文字`ghghgh`。
2. 我是一个测试问题二'qweqw'，请问企鹅请问请问佛挡杀`fgfgf`佛第三节课。
2. 我是一个测试问题三'fgfgfg'，请问企鹅请问请问佛挡杀`trtrtr`佛第三节课。
{% endtimenode %}

{% endtimeline %}


## title演示
### 演示
{% title h1, 我是标题 %}

你好啊，未来越来越好哦

{% title h2, 我是标题 %}

你好啊，加油哦

{% title h2, 我是标题, warning %}

{% title h2, 我是标题, red %}

### titleB演示
{% titleB h2, 我是标题bbb %}
{% titleB h2, 我是标题bbb, #895546 %}
{% titleB h2, 我是标题bbb, red %}


## video视频
{% title h2, video演示 %}
100%宽度
{% video  https://media.w3.org/2010/05/sintel/trailer.mp4 %}

50%宽度
{% videos, 2 %}
{% video  https://media.w3.org/2010/05/sintel/trailer.mp4 %}
{% video  https://media.w3.org/2010/05/sintel/trailer.mp4 %}
{% video  https://media.w3.org/2010/05/sintel/trailer.mp4 %}
{% video  https://media.w3.org/2010/05/sintel/trailer.mp4 %}
{% endvideos %}

25%宽度
{% videos, 4 %}
{% video  https://media.w3.org/2010/05/sintel/trailer.mp4 %}
{% video  https://media.w3.org/2010/05/sintel/trailer.mp4 %}
{% video  https://media.w3.org/2010/05/sintel/trailer.mp4 %}
{% video  https://media.w3.org/2010/05/sintel/trailer.mp4 %}
{% video  https://media.w3.org/2010/05/sintel/trailer.mp4 %}
{% video  https://media.w3.org/2010/05/sintel/trailer.mp4 %}
{% video  https://media.w3.org/2010/05/sintel/trailer.mp4 %}
{% video  https://media.w3.org/2010/05/sintel/trailer.mp4 %}
{% endvideos %}

## YouTuber
```text
{% youtuber video 5ROIU_9dYe4 %}

    start: 0,
    allowfullscreen: 1,
    autoplay: 0,
    hl: en,
    cc_lang_pref: en,
    cc_load_policy: 1,
    color: white,
    controls: 1,
    disablekb: 0,
    enablejsapi: 1,
    fs: 0,
    iv_load_policy: 3,
    loop: 0,
    modestbranding: 1,
    playsinline: 0,
    privacy_mode: yes,
    rel: 0,
    showinfo: 0,
    origin: blog.richiebartlett.com,
    widget_referrer: blog.richiebartlett.com
{% endyoutuber %}
```

{% youtuber video 5ROIU_9dYe4 %}

    start: 0,
    allowfullscreen: 1,
    autoplay: 0,
    hl: en,
    cc_lang_pref: en,
    cc_load_policy: 1,
    color: white,
    controls: 1,
    disablekb: 0,
    enablejsapi: 1,
    fs: 0,
    iv_load_policy: 3,
    loop: 0,
    modestbranding: 1,
    playsinline: 0,
    privacy_mode: yes,
    rel: 0,
    showinfo: 0,
    origin: blog.richiebartlett.com,
    widget_referrer: blog.richiebartlett.com
{% endyoutuber %}


## Vimeo
``` {% vimeo 56695094 %} ```
 {% vimeo 56695094 %}


## Wikipedia
``` {% wikipedia title:User_interface wikiButton:true lang:en sentences:5 %} ```
 {% wikipedia title:User_interface wikiButton:true lang:en sentences:5 %}


## Twitter
``` {% twitter https://twitter.com/MillsReggie/status/1475339348170375171 %} ```
 {% twitter https://twitter.com/MillsReggie/status/1475339348170375171 %}


## Simple TABLE

| col 1 | col 2 | col 2 |
| --- | --: | :-- |
| cell 1,1 | cell 1,2| left 1,3|
| default 2,1 | right 2,2| cell 2,3|


## FootNotes
 Easy to add internal references similar to Wikipedia within the article. Simply add a bracketed carot number (*e.g.* `[ ^1 ]`) in the paragraph. At the end of the article, place a section with each of the brackets and references like below:

```
## Footnotes

[ ^1 ]: [Frequently Asked Questions (FAQs) - U.S. Energy Information Administration (EIA)](https://www.eia.gov/tools/faqs/faq.php?id=97&t=3#:~:text=How%20much%20electricity%20does%20an,about%20877%20kWh%20per%20month.)
[ ^2 ]: [Amazon.com: 2600W Power Supply for ASIC Miner](https://www.amazon.com/2600W-Supply-Compatible-BITMAIN-Antminer/dp/B08RHXSMMP/ref=sr_1_fkmr0_1?dchild=1&keywords=asic+miner+2600+watt&qid=1622263558&sr=8-1-fkmr0)
[ ^3 ]: [Bank of America prioritized internal cloud. Now it's evaluating third-party providers](https://www.ciodive.com/news/bank-of-america-prioritized-internal-cloud-now-its-evaluating-third-party/565228/)
```

 ![https://github.com/guorant/hexo-footnote](https://camo.githubusercontent.com/6a275886e80fa1ca1fdd0502a8fbcb61c69597c93901beb65e4250b007320319/687474703a2f2f646174612e6b6368656e2e63632f6d61635f717273796e632f37316536393463653666303035326238336637616638316366613763636336342e706e672d3936302e6a7067)

## CodeBlocks

```javascript Hi-World
// https://hexo.io/docs/syntax-highlight.html
/*
 ```[language] [title] [url] [link text] [additional options]
 */

let string = "Hello World";

string += " all!";

alert( string );

```


## Github卡片

### Github用户卡片
{% ghcard LoreZyra %}

### 表格中加入用户卡片

| {% ghcard LoreZyra %} | {% ghcard LoreZyra, theme=vue %} |
| -- | -- |
| {% ghcard LoreZyra, theme=buefy %} | {% ghcard LoreZyra, theme=solarized-light %} |
| {% ghcard LoreZyra, theme=onedark %} | {% ghcard LoreZyra, theme=solarized-dark %} |
| {% ghcard LoreZyra, theme=algolia %} | {% ghcard LoreZyra, theme=calm %} |


### 单个项目卡片
{% ghcard lorezyra/blog.RichieBartlett.com %}
{% ghcard lorezyra/blog.RichieBartlett.com %}
{% ghcard lorezyra/blog.RichieBartlett.com %}
{% ghcard lorezyra/blog.RichieBartlett.com %}


### 表格中加入单个项目卡片
| {% ghcard lorezyra/blog.RichieBartlett.com %} | {% ghcard lorezyra/blog.RichieBartlett.com, theme=vue %} |
| -- | -- |
| {% ghcard lorezyra/blog.RichieBartlett.com, theme=buefy %} | {% ghcard lorezyra/blog.RichieBartlett.com, theme=solarized-light %} |
| {% ghcard lorezyra/blog.RichieBartlett.com, theme=onedark %} | {% ghcard lorezyra/blog.RichieBartlett.com, theme=solarized-dark %} |
| {% ghcard lorezyra/blog.RichieBartlett.com, theme=algolia %} | {% ghcard lorezyra/blog.RichieBartlett.com, theme=calm %} |



## GIST
``` {% gist 18938572f5df000ebe06fbd1872e4e39 useHexo.md %} ```

{% gist 18938572f5df000ebe06fbd1872e4e39 useHexo.md %}


## Post_Link
Include links to other posts.

```text
{% post_path filename %}
{% post_link filename [title] [escape] %}
```

You can ignore permalink and folder information, like languages and dates, when using this tag.

For instance: ``` {% post_link how-to-bake-a-cake %} ```.

This will work as long as the filename of the post is `how-to-bake-a-cake.md`, even if the post is located at `source/posts/2015-02-my-family-holiday` and has permalink `2018/en/how-to-bake-a-cake`.

You can customize the text to display, instead of displaying the post’s title.
### Do not escape title.
``` {% post_link Markup-manual '<b>bold</b> custom title' false %} ```

{% post_link Markup-manual '<b>bold</b> custom title' false %}

## Post Excerpt
 Use text placed before the `<!-- more -->` tag as an excerpt for the post. `excerpt:` value in the [front-matter](https://hexo.io/docs/front-matter#Settings-amp-Their-Default-Values), if specified, will take precedent.

 **Example:**
```html
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
<!-- more -->
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

## HEXO helpers
 https://hexo.io/docs/helpers

## HEXO variables
 https://hexo.io/docs/variables
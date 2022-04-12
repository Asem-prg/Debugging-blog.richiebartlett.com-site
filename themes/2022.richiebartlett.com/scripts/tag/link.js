'use strict';

// {% link title, url %}
// {% link `title`, url, img %}
hexo.extend.tag.register('link', function(args) {
  let text = '';
  let url = '';
  let img = '';
  let result = '';
  //args are defaulted to space ` ` delimited...
  args = args.join(' ');
  // console.info("{% link {{args}} %}: ", args);
  //check for encapsulating back-tick (`) marks, if exist pull out title
  if (args.indexOf("`", 1) > 1 ) {
    //extract title from args
    text = args.split('`')[1];
    // console.log("   {% link {{text}} %}: ", text);
    // grab URL (& img)
    args = args.split('`')[2].split(",");
  } else {
    // console.info("   text not back-ticked encapsulated...");
    args = args.split(',');
    text = args[0].trim();
  }
  //check for URL
  if (args.length >= 2) {
    url = args[1].trim();
    // console.log("   {% link {{url}} %}: ", url);
  }
  //check for img
  if (args.length == 3) {
    img = args[2].trim();
    // console.log("   {% link {{img}} %}: ", img);
  }

  if (url !== '') {
    // 发现如果不套一层 div 在其它可渲染 md 的容器中容易被分解
    result += '<div class="tagLink"><a class="link-card" title="' + text + '" href="' + url + '">';
    // left
    result += '<div class="left">';
    result += '<img src="' + (img || hexo.theme.config.tag_plugins.linkImg) + '"/>';
    result += '</div>';
    // right
    result += '<div class="right"><p class="text">' + text + '</p><p class="url">' + url + '</p></div>';
    result += '</a></div>';
  }
  return result;
});

hexo.extend.tag.register('linkgroup', function(args, content) {
  let ret = '';
  ret += '<div class="link-group">';
  ret += content;
  ret += '</div>';
  return ret;
}, {ends: true});

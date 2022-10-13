 function getUrlValue(attr, url) {
  url = url ? url : window.location.href;
  const index = url.indexOf('?');
  return url
    .slice(index + 1)
    .split('&')
    .reduce((pre, cur) => {
      pre[cur.split('=')[0]] = cur.split('=')[1];
      return pre;
    }, {})[attr];
 }
module.exports = {
  getUrlValue
}
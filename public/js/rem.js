/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-08-29 16:24:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-08-29 16:48:18
 */
function remSize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
  if (deviceWidth >= 750) {
    deviceWidth = 750;
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320;
  }
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
  document.body.style.fontSize=0.3+'rem'
}

remSize();

window.onresize = function() {
  remSize();
};

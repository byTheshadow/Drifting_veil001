// splash/splash-01/splash.js - 简化版
/**
 * 开屏动画脚本 - Apple 风格
 * 作者：@玉元一shadow
 */

document.addEventListener('DOMContentLoaded', () => {
  const splashWrapper = document.querySelector('.splash-wrapper');
  
  // 2.3秒后开始展开动画
  setTimeout(() => {
    splashWrapper.classList.add('expand');
  }, 2300);
  
  // 3.1秒后开始淡出
  setTimeout(() => {
    splashWrapper.classList.add('fade-out');
  }, 3100);
  
  // 3.7秒后移除元素
  setTimeout(() => {
    splashWrapper.remove();
  }, 3700);
});

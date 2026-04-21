// splash/splash-01/splash.js
/**
 * 开屏动画脚本
 * 作者：@玉元一shadow
 */

document.addEventListener('DOMContentLoaded', () => {
  const splashWrapper = document.querySelector('.splash-wrapper');
  const duration = 3200; // 总时长 3.2 秒
  
  // 动画完成后淡出
  setTimeout(() => {
    splashWrapper.classList.add('fade-out');
    
    // 淡出完成后移除元素
    setTimeout(() => {
      splashWrapper.remove();
    }, 500);
  }, duration);
});

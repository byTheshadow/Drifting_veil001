// config.js
/**
 * Drifting Veil 001 - 总配置文件
 * 作者：@玉元一shadow
 禁止商业用途以及二转
 * 
 * 这是整个网站的控制中心
 * 只需要修改这里的设置即可切换主题和功能
 */

const CONFIG = {
  // ===== 基本信息 =====
  siteName: "我的作品网站",           // 网站名称
  author: "@玉元一shadow",           // 作者水印（请保留）
  
  // ===== 主题设置 =====
  theme: "blue-dream",               // 当前主题：blue-dream（蓝色梦幻）
  
  // ===== 开屏动画 =====
  enableSplash: true,                // 是否启用开屏动画
  splashAnimation: "splash-01",      // 动画版本：splash-01（文件夹展开）
  splashDuration: 3000,              // 动画持续时间（毫秒）
  
  // ===== 功能模块 =====
  modules: {
    gallery: true,                   // 启用画廊
    characterCards: true,            // 启用角色卡
    about: true                      // 启用关于页面
  },
  
  // ===== 交互设置 =====
  animations: {
    enableScrollEffects: true,       // 滚动交互效果
    enableHoverEffects: true,        // 悬停效果
    cardHoverScale: 1.05            // 卡片悬停放大倍数
  }
};

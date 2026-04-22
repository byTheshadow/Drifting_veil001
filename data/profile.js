// data/profile.js
/**
 * 个人信息配置文件
 * 
 * 📝 用户编辑指南：
 * 1. 修改下方的文字内容
 * 2. 替换 assets/images/ 中的图片
 * 3. 保存后刷新页面即可看到效果
 */

const PROFILE = {
  // ===== 主界面欢迎语 =====
  welcome: {
    line1: "CREATIVE PORTFOLIO",      // 第一行大字（英文）
    line2: "创意作品集",               // 第二行大字（中文）
  },
  
  // ===== 中心展示图片 =====
  heroImage: "assets/images/hero-visual.jpg",  // 中心圆形图片路径
  
  // ===== 个人信息 =====
  name: "你的名字",
  nickname: "昵称",
  avatar: "assets/images/avatar.jpg",
  
  // ===== 简介 =====
  bio: "这里是个人简介，可以写一段关于自己的介绍文字。",
  
  // ===== 环绕标签（可自由增删改）=====
  // 💡 提示：
  // - short: 标签简称（始终显示）
  // - full: 完整描述（悬停时显示）
  // - 可以添加更多标签，系统会自动均匀分布
  tags: [
    {
      short: "UI/UX",
      full: "专注用户体验与界面美学设计"
    },
    {
      short: "插画",
      full: "手绘与数字插画创作"
    },
    {
      short: "角色设计",
      full: "原创角色与同人角色设计"
    },
    {
      short: "摄影",
      full: "捕捉生活中的美好瞬间"
    },
    {
      short: "动画",
      full: "2D动画与动态图形设计"
    },
    {
      short: "前端开发",
      full: "精通前端开发与交互动画"
    },
    {
      short: "品牌设计",
      full: "视觉识别系统与品牌形象"
    },
    {
      short: "3D建模",
      full: "三维角色与场景建模"
    },
    {
      short: "2024",
      full: "保持热爱，奔赴山海"
    },
    {
      short: "创作者",
      full: "用设计讲述故事"
    }
  ],
  
  // ===== 社交链接 =====
  social: [
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/yourusername",
      color: "#5A7A9A"
    },
    {
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/yourusername",
      color: "#A5C8ED"
    },
    {
      name: "Email",
      icon: "email",
      url: "mailto:your@email.com",
      color: "#D1E3F8"
    }
  ],
  
  // ===== 主页展示的角色卡片 =====
  featuredCards: [
    {
      id: 1,
      name: "角色名称 1",
      image: "assets/images/characters/char1.jpg",
      category: "原创"
    },
    {
      id: 2,
      name: "角色名称 2",
      image: "assets/images/characters/char2.jpg",
      category: "同人"
    },
    {
      id: 3,
      name: "角色名称 3",
      image: "assets/images/characters/char3.jpg",
      category: "原创"
    },
    {
      id: 4,
      name: "角色名称 4",
      image: "assets/images/characters/char4.jpg",
      category: "同人"
    },
    {
      id: 5,
      name: "角色名称 5",
      image: "assets/images/characters/char5.jpg",
      category: "原创"
    },
    {
      id: 6,
      name: "角色名称 6",
      image: "assets/images/characters/char6.jpg",
      category: "同人"
    }
  ]
};


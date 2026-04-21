
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
    line1: "某某某的作品网站",        // 第一行大字（中文）
    line2: "WELCOME",                 // 第二行大字（英文）
    subtitle: "探索我的创作世界"      // 副标题（可选，留空则不显示）
  },
  
  // ===== 个人信息 =====
  name: "你的名字",
  nickname: "昵称",
  avatar: "assets/images/avatar.jpg",  // 头像路径
  
  // ===== 简介 =====
  bio: "这里是个人简介，可以写一段关于自己的介绍文字。支持多行文本。",
  
  // ===== 社交链接 =====
  social: [
    {
      name: "GitHub",
      icon: "github",                  // 图标名称
      url: "https://github.com/yourusername",
      color: "#7090B0"
    },
    {
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/yourusername",
      color: "#A0C0E0"
    },
    {
      name: "Email",
      icon: "email",
      url: "mailto:your@email.com",
      color: "#506080"
    }
  ],
  
  // ===== 标签 =====
  tags: ["创作者", "设计师", "角色设计", "插画"],
  
  // ===== 主页展示的角色卡片预览 =====
  // 这些卡片会显示在欢迎语下方
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

// scripts/main.js
/**
 * 主脚本文件
 * 作者：@玉元一shadow
 * 
 * 功能：初始化页面、加载数据、处理交互
 */

// ===== 页面加载完成后初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initNavigation();
  initScrollEffects();
  loadProfileData();
  renderFeaturedCards();
});

// ===== 初始化页面 =====
function initPage() {
  console.log('🎨 Drifting Veil 初始化中...');
  console.log('📦 当前主题:', CONFIG.theme);
  console.log('✨ 作者:', CONFIG.author);
  
  // 设置作者水印
  const authorElement = document.getElementById('authorName');
  if (authorElement) {
    authorElement.textContent = CONFIG.author;
  }
  
  // 如果启用开屏动画，延迟显示主内容
  if (CONFIG.enableSplash) {
    const mainContent = document.getElementById('main-content');
    mainContent.style.opacity = '0';
    
    setTimeout(() => {
      mainContent.style.opacity = '1';
    }, CONFIG.splashDuration);
  }
}

// ===== 导航栏交互 =====
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // 滚动时添加阴影
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // 移动端菜单切换
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // 动画效果
      const spans = navToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    });
  }
  
  // 导航链接点击
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // 移除所有 active 类
      navLinks.forEach(l => l.classList.remove('active'));
      // 添加到当前链接
      link.classList.add('active');
      
      // 移动端关闭菜单
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    });
  });
}

// ===== 滚动交互效果 =====
function initScrollEffects() {
  if (!CONFIG.animations.enableScrollEffects) return;
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // 观察所有卡片
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
  });
}

// ===== 加载个人信息数据 =====
function loadProfileData() {
  // 加载欢迎语
  const titleZh = document.getElementById('heroTitleZh');
  const titleEn = document.getElementById('heroTitleEn');
  const subtitle = document// scripts/main.js
/**
 * 主脚本文件
 * 作者：@玉元一shadow
 * 
 * 功能：初始化页面、加载数据、处理交互
 */

// ===== 页面加载完成后初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initNavigation();
  initScrollEffects();
  loadProfileData();
  renderFeaturedCards();
});

// ===== 初始化页面 =====
function initPage() {
  console.log('🎨 Drifting Veil 初始化中...');
  console.log('📦 当前主题:', CONFIG.theme);
  console.log('✨ 作者:', CONFIG.author);
  
  // 设置作者水印
  const authorElement = document.getElementById('authorName');
  if (authorElement) {
    authorElement.textContent = CONFIG.author;
  }
  
  // 如果启用开屏动画，延迟显示主内容
  if (CONFIG.enableSplash) {
    const mainContent = document.getElementById('main-content');
    mainContent.style.opacity = '0';
    
    setTimeout(() => {
      mainContent.style.opacity = '1';
    }, CONFIG.splashDuration);
  }
}

// ===== 导航栏交互 =====
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // 滚动时添加阴影
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // 移动端菜单切换
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // 动画效果
      const spans = navToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    });
  }
  
  // 导航链接点击
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // 移除所有 active 类
      navLinks.forEach(l => l.classList.remove('active'));
      // 添加到当前链接
      link.classList.add('active');
      
      // 移动端关闭菜单
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
      }
    });
  });
}

// ===== 滚动交互效果 =====
function initScrollEffects() {
  if (!CONFIG.animations.enableScrollEffects) return;
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // 观察所有卡片
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
  });
}

// ===== 加载个人信息数据 =====
function loadProfileData() {
  // 加载欢迎语
  const titleZh = document.getElementById('heroTitleZh');
  const titleEn = document.getElementById('heroTitleEn');
  const subtitle = document.getElementById('heroSubtitle');
  
  if (titleZh && PROFILE.welcome.line1) {
    titleZh.textContent = PROFILE.welcome.line1;
  }
  
  if (titleEn && PROFILE.welcome.line2) {
    titleEn.textContent = PROFILE.welcome.line2;
  }
  
  if (subtitle && PROFILE.welcome.subtitle) {
    subtitle.textContent = PROFILE.welcome.subtitle;
  } else if (subtitle && !PROFILE.welcome.subtitle) {
    subtitle.style.display = 'none';
  }
}

// ===== 渲染特色卡片 =====
function renderFeaturedCards() {
  const container = document.getElementById('featuredCards');
  if (!container || !PROFILE.featuredCards) return;
  
  container.innerHTML = '';
  
  PROFILE.featuredCards.forEach((card, index) => {
    const cardElement = createCard(card, index);
    container.appendChild(cardElement);
  });
}

// ===== 创建单个卡片 =====
function createCard(data, index) {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.animationDelay = `${0.1 * index}s`;
  
  // 图片
  const img = document.createElement('img');
  img.className = 'card-image';
  img.src = data.image;
  img.alt = data.name;
  img.loading = 'lazy';
  
  // 处理图片加载失败
  img.onerror = () => {
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="300"%3E%3Crect fill="%23353535" width="200" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23808080" font-size="14"%3E暂无图片%3C/text%3E%3C/svg%3E';
  };
  
  // 覆盖层
  const overlay = document.createElement('div');
  overlay.className = 'card-overlay';
  
  const name = document.createElement('div');
  name.className = 'card-name';
  name.textContent = data.name;
  
  const category = document.createElement('div');
  category.className = 'card-category';
  category.textContent = data.category;
  
  overlay.appendChild(name);
  overlay.appendChild(category);
  
  card.appendChild(img);
  card.appendChild(overlay);
  
  // 点击事件
  card.addEventListener('click', () => {
    handleCardClick(data);
  });
  
  return card;
}

// ===== 处理卡片点击 =====
function handleCardClick(data) {
  console.log('点击卡片:', data.name);
  // 后续可以添加模态框或跳转到详情页
  // 目前先在控制台输出
}

// ===== 工具函数：平滑滚动 =====
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// ===== 导出函数供其他模块使用 =====
window.DriftingVeil = {
  smoothScrollTo,
  createCard,
  renderFeaturedCards
};
  // ===== 生成气泡效果 =====
function createBubbles() {
  const container = document.getElementById('bubblesContainer');
  if (!container) return;
  
  const bubbleCount = 15; // 气泡数量
  
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // 随机大小
    const size = Math.random() * 60 + 20; // 20-80px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // 随机起始位置
    bubble.style.left = `${Math.random() * 100}%`;
    
    // 随机动画时长
    const duration = Math.random() * 10 + 8; // 8-18秒
    bubble.style.animationDuration = `${duration}s`;
    
    // 随机延迟
    const delay = Math.random() * 5;
    bubble.style.animationDelay = `${delay}s`;
    
    // 随机漂移距离
    const drift = (Math.random() - 0.5) * 100; // -50 到 50px
    bubble.style.setProperty('--drift', `${drift}px`);
    
    container.appendChild(bubble);
  }
}

// 在 DOMContentLoaded 中调用
document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initNavigation();
  initScrollEffects();
  loadProfileData();
  renderFeaturedCards();
  createBubbles(); // 添加这行
});




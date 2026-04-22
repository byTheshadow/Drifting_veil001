// scripts/main.js
/**
 * 主脚本文件 - 优雅简约版
 * 作者：@玉元一shadow
 */

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initNavigation();
  initGSAPAnimations();
  loadProfileData();
  renderTags();
  renderFeaturedCards();
  initParallaxEffect();
  initScrollAnimations();
});

// ===== 初始化页面 =====
function initPage() {
  console.log('🎨 Drifting Veil 初始化中...');
  
  const authorElement = document.getElementById('authorName');
  if (authorElement) {
    authorElement.textContent = CONFIG.author;
  }
  
  if (CONFIG.enableSplash) {
    const splashContainer = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    
    if (splashContainer && mainContent) {
      mainContent.style.opacity = '0';
      
      setTimeout(() => {
        splashContainer.style.opacity = '0';
        splashContainer.style.transition = 'opacity 0.6s ease';
        
        setTimeout(() => {
          splashContainer.remove();
          mainContent.style.opacity = '1';
        }, 600);
      }, 3700);
    }
  }
}

// ===== 导航栏交互 =====
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      const spans = navToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(7px)';
        spans[1].style.transform = 'rotate(-45deg) translateY(-7px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.transform = '';
      }
    });
  }
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      const target = link.getAttribute('href');
      smoothScrollTo(target);
      
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.transform = '';
      }
    });
  });
}

// ===== GSAP 入场动画 =====
function initGSAPAnimations() {
  if (typeof gsap === 'undefined') {
    console.warn('GSAP 未加载，跳过动画');
    return;
  }
  
  // 注册 ScrollTrigger 插件
  gsap.registerPlugin(ScrollTrigger);
  
  // 标题入场动画
  gsap.from(".hero-title-en", { 
    opacity: 0, 
    y: 50, 
    duration: 1.5, 
    ease: "power4.out",
    delay: 0.3
  });
  
  gsap.from(".hero-title-zh", { 
    opacity: 0, 
    y: 20, 
    duration: 1.5, 
    delay: 0.5,
    ease: "power4.out"
  });
  
  // 中心图片入场动画
  gsap.from(".center-frame", { 
    scale: 0.8, 
    opacity: 0, 
    duration: 2, 
    ease: "elastic.out(1, 0.5)",
    delay: 0.4
  });
  
  // 标签入场动画
  gsap.from(".tag-item", { 
    opacity: 0, 
    scale: 0.8,
    stagger: 0.1, 
    duration: 1,
    delay: 0.8,
    ease: "back.out(1.7)"
  });
  
  // 滚动提示动画
  gsap.from(".scroll-hint", {
    opacity: 0,
    y: -20,
    duration: 1,
    delay: 1.5
  });
}

// ===== 视差效果（鼠标跟随）=====
function initParallaxEffect() {
  const centerFrame = document.getElementById('centerFrame');
  const tagOrbit = document.getElementById('tagOrbit');
  const mainTitle = document.getElementById('mainTitle');
  
  if (!centerFrame || !tagOrbit) return;
  
  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    
    // 中心图片 3D 旋转
    if (typeof gsap !== 'undefined') {
      gsap.to(centerFrame, {
        rotationY: x,
        rotationX: -y,
        transformPerspective: 1000,
        duration: 0.5,
        ease: "power2.out"
      });
      
      // 轨道轻微移动
      gsap.to(tagOrbit, {
        x: x * 2,
        y: y * 2,
        duration: 0.8,
        ease: "power2.out"
      });
      
      // 标题轻微移动
      if (mainTitle) {
        gsap.to(mainTitle, {
          x: -x * 1.5,
          y: -y * 1.5,
          duration: 0.6,
          ease: "power2.out"
        });
      }
    }
  });
  
  // 标签悬停时暂停旋转
  const tags = document.querySelectorAll('.tag-item');
  tags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      if (typeof gsap !== 'undefined') {
        gsap.set(tagOrbit, { animationPlayState: "paused" });
        gsap.set(".tag-item", { animationPlayState: "paused" });
      }
    });
    
    tag.addEventListener('mouseleave', () => {
      if (typeof gsap !== 'undefined') {
        gsap.set(tagOrbit, { animationPlayState: "running" });
        gsap.set(".tag-item", { animationPlayState: "running" });
      }
    });
  });
}

// ===== 滚动动画 =====
function initScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    return;
  }
  
  // 滚动时中心图放大并淡出
  gsap.to(".center-frame", {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    scale: 1.5,
    opacity: 0,
    y: -100
  });
  
  // 滚动时标题移动并淡出
  gsap.to(".main-title", {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    y: 200,
    opacity: 0
  });
  
  // 滚动时轨道淡出
  gsap.to(".tag-orbit", {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    opacity: 0,
    scale: 1.3
  });
  
  // 卡片滚动渐入
  gsap.from(".card", {
    scrollTrigger: {
      trigger: ".featured-cards",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.8,
    ease: "power2.out"
  });
  
  // 区块标题动画
  gsap.from(".section-title", {
    scrollTrigger: {
      trigger: ".section-title",
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out"
  });
}

// ===== 加载个人信息数据 =====
function loadProfileData() {
  const titleEn = document.getElementById('heroTitleEn');
  const titleZh = document.getElementById('heroTitleZh');
  const heroImage = document.getElementById('heroImage');
  
  if (titleEn && PROFILE.welcome.line1) {
    titleEn.textContent = PROFILE.welcome.line1;
  }
  
  if (titleZh && PROFILE.welcome.line2) {
    titleZh.textContent = PROFILE.welcome.line2;
  }
  
  if (heroImage && PROFILE.heroImage) {
    heroImage.src = PROFILE.heroImage;
    heroImage.onerror = () => {
      // 图片加载失败时使用占位图
      heroImage.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="450" height="450"%3E%3Crect fill="%23EFF5FB" width="450" height="450"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%235A7A9A" font-size="18" font-family="system-ui"%3E暂无图片%3C/text%3E%3C/svg%3E';
    };
  }
}

// ===== 渲染环绕标签 =====
function renderTags() {
  const tagOrbit = document.getElementById('tagOrbit');
  if (!tagOrbit || !PROFILE.tags) return;
  
  tagOrbit.innerHTML = '';
  
  const tagCount = PROFILE.tags.length;
  const radius = 350; // 轨道半径
  
  PROFILE.tags.forEach((tag, index) => {
    const tagElement = document.createElement('div');
    tagElement.className = 'tag-item';
    
    // 计算标签位置（均匀分布在圆周上）
    const angle = (360 / tagCount) * index;
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * radius;
    const y = Math.sin(radian) * radius;
    
    tagElement.style.left = `calc(50% + ${x}px)`;
    tagElement.style.top = `calc(50% + ${y}px)`;
    tagElement.style.transform = 'translate(-50%, -50%)';
    
    // 创建标签内容
    const shortSpan = document.createElement('span');
    shortSpan.className = 'tag-short';
    shortSpan.textContent = tag.short;
    
    const fullSpan = document.createElement('span');
    fullSpan.className = 'tag-full';
    fullSpan.textContent = ` - ${tag.full}`;
    
    tagElement.appendChild(shortSpan);
    tagElement.appendChild(fullSpan);
    
    tagOrbit.appendChild(tagElement);
  });
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
  
  // 图片
  const img = document.createElement('img');
  img.className = 'card-image';
  img.src = data.image;
  img.alt = data.name;
  img.loading = 'lazy';
  
  // 处理图片加载失败
  img.onerror = () => {
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="500"%3E%3Crect fill="%23EFF5FB" width="400" height="500"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%235A7A9A" font-size="16" font-family="system-ui"%3E暂无图片%3C/text%3E%3C/svg%3E';
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
  
  // 鼠标移动视差效果
  card.addEventListener('mousemove', (e) => {
    if (!CONFIG.animations.enableHoverEffects) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    if (typeof gsap !== 'undefined') {
      gsap.to(img, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      img.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  });
  
  card.addEventListener('mouseleave', () => {
    if (typeof gsap !== 'undefined') {
      gsap.to(img, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      img.style.transform = '';
    }
  });
  
  return card;
}

// ===== 处理卡片点击 =====
function handleCardClick(data) {
  console.log('点击卡片:', data.name);
  // 后续可以添加模态框或跳转到详情页
  // 示例：打开模态框显示详情
  // showModal(data);
}

// ===== 工具函数：平滑滚动 =====
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    const offsetTop = element.offsetTop - 60; // 减去导航栏高度
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// ===== 导出函数供其他模块使用 =====
window.DriftingVeil = {
  smoothScrollTo,
  createCard,
  renderFeaturedCards,
  renderTags
};






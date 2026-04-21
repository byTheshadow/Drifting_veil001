// scripts/main.js - 完整版
/**
 * 主脚本文件 - Apple 风格
 * 作者：@玉元一shadow
 */

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initNavigation();
  initScrollEffects();
  initCursorGlow();
  initDotPattern();
  loadProfileData();
  renderFeaturedCards();
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
  const navbar = document.querySelector('.navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // 移动端菜单切换
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      const spans = navToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(5px)';
        spans[1].style.transform = 'rotate(-45deg) translateY(-5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.transform = '';
      }
    });
  }
  
  // 导航链接点击
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.transform = '';
      }
    });
  });
}

// ===== 滚动交互效果 =====
function initScrollEffects() {
  if (!CONFIG.animations.enableScrollEffects) return;
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
}

// ===== 鼠标跟随光晕效果 =====
function initCursorGlow() {
  const cursorGlow = document.getElementById('cursorGlow');
  if (!cursorGlow) return;
  
  let mouseX = 0;
  let mouseY = 0;
  let glowX = 0;
  let glowY = 0;
  
  // 监听鼠标移动
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // 平滑跟随动画
  function animateGlow() {
    const dx = mouseX - glowX;
    const dy = mouseY - glowY;
    
    glowX += dx * 0.1;
    glowY += dy * 0.1;
    
    cursorGlow.style.left = `${glowX - 200}px`;
    cursorGlow.style.top = `${glowY - 200}px`;
    
    requestAnimationFrame(animateGlow);
  }
  
  animateGlow();
  
  // 鼠标进入卡片时放大光晕
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      cursorGlow.style.transform = 'scale(1.5)';
      cursorGlow.style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
      cursorGlow.style.transform = 'scale(1)';
      cursorGlow.style.opacity = '0.6';
    });
  });
}

// ===== 点阵背景效果 =====
function initDotPattern() {
  const canvas = document.getElementById('dotPattern');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  
  // 设置画布尺寸
  function resizeCanvas() {
    canvas.width = 500 * dpr;
    canvas.height = 500 * dpr;
    canvas.style.width = '500px';
    canvas.style.height = '500px';
    ctx.scale(dpr, dpr);
  }
  
  resizeCanvas();
  
  // 绘制点阵
  function drawDots() {
    ctx.clearRect(0, 0, 500, 500);
    
    const dotSize = 2;
    const spacing = 8;
    const cols = Math.floor(500 / spacing);
    const rows = Math.floor(500 / spacing);
    
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacing;
        const y = j * spacing;
        
        // 创建波浪效果
        const distance = Math.sqrt(
          Math.pow(x - 250, 2) + Math.pow(y - 250, 2)
        );
        const wave = Math.sin(distance * 0.02 + Date.now() * 0.001) * 0.5 + 0.5;
        const opacity = wave * 0.6;
        
        ctx.fillStyle = `rgba(0, 113, 227, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    requestAnimationFrame(drawDots);
  }
  
  drawDots();
  
  // 响应窗口大小变化
  window.addEventListener('resize', resizeCanvas);
}

// ===== 加载个人信息数据 =====
function loadProfileData() {
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
  
  // 加载右侧装饰图片
  const heroImage = document.getElementById('heroImage');
  if (heroImage && PROFILE.heroImage) {
    heroImage.src = PROFILE.heroImage;
    heroImage.onerror = () => {
      // 如果图片加载失败，隐藏整个视觉区域
      const heroVisual = document.querySelector('.hero-visual');
      if (heroVisual) {
        heroVisual.style.display = 'none';
      }
    };
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
  
  // 图片
  const img = document.createElement('img');
  img.className = 'card-image';
  img.src = data.image;
  img.alt = data.name;
  img.loading = 'lazy';
  
  // 处理图片加载失败
  img.onerror = () => {
    img.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500'%3E%3Crect fill='%23F5F5F7' width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%236E6E73' font-size='16' font-family='system-ui'%3E暂无图片%3C/text%3E%3C/svg%3E`;
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
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    img.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  
  card.addEventListener('mouseleave', () => {
    img.style.transform = '';
  });
  
  return card;
}

// ===== 处理卡片点击 =====
function handleCardClick(data) {
  console.log('点击卡片:', data.name);
  // 后续可以添加模态框或跳转到详情页
}

// ===== 工具函数：平滑滚动 =====
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    const offsetTop = element.offsetTop - 48; // 减去导航栏高度
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
  renderFeaturedCards
};





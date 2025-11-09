document.addEventListener("DOMContentLoaded", () => {
  
  const toggleBtn = document.getElementById("themeToggle");
  const setTheme = (isDark) => {
    document.body.classList.add('theme-transition');
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    toggleBtn.classList.add('btn-press');
    const icon = toggleBtn.querySelector('i');
    icon.classList.add('rotate-icon');

    setTimeout(() => {
      toggleBtn.classList.remove('btn-press');
      icon.classList.remove('rotate-icon');
      icon.classList.toggle('fa-moon', !isDark);
      icon.classList.toggle('fa-sun', isDark);
    }, 300);
  };

  
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme === 'dark');

  toggleBtn.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark");
    setTheme(isDark);
  });

 

  const buttons = document.querySelectorAll('.btn');
  const handleButtonClick = function (e) {
   
    if (this.closest('.course-card-link')) {
      return;
    }

  
  };

  buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
    
    button.addEventListener('mouseenter', () => {
      button.style.transform = "translateY(-3px)";
      button.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = "";
      button.style.boxShadow = "";
    });
  });

  
  const courseCards = document.querySelectorAll('.course-card');
  courseCards.forEach(card => {
    const img = card.querySelector('img');
    const btn = card.querySelector('.btn'); 
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
      img.style.transform = 'scale(1.05) rotate(1deg)';
      
      if (btn) {
        btn.style.transform = 'scale(1.05)';
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
      img.style.transform = '';
      
      if (btn) {
        btn.style.transform = '';
      }
    });

    card.addEventListener('mousedown', () => {
      card.style.transform = 'translateY(-5px) scale(0.98)';
    });
    
    card.addEventListener('mouseup', () => {
      card.style.transform = 'translateY(-10px)';
    });
  });

  
  const features = document.querySelectorAll('.feature');
  features.forEach(feature => {
    const icon = feature.querySelector('i');
    
    feature.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.2) rotate(5deg)';
      feature.style.transform = 'translateY(-5px)';
    });
    
    feature.addEventListener('mouseleave', () => {
      icon.style.transform = '';
      feature.style.transform = '';
    });
  });

  
  const smoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.style.animation = 'fadeInUp 0.5s ease-out';
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const debounce = (func, wait = 100) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  };

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        smoothScroll(targetId);
      }
    });
  });

  
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-3px)';
      link.style.color = '#f39c12';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.transform = '';
      link.style.color = '';
    });
  });

  
  const heroImage = document.querySelector('.hero-image img');
  if (heroImage) {
    heroImage.style.transition = 'transform 0.5s ease-out';
    setTimeout(() => {
      heroImage.style.transform = 'scale(1.02)';
    }, 500);
  }

  
  const socialIcons = document.querySelectorAll('.social-icons a');
  socialIcons.forEach(icon => {
    const originalColor = icon.style.color;
    const iconElement = icon.querySelector('i');
    
  //animation for social icons
    icon.addEventListener('mousemove', (e) => {
      const rect = icon.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleX = (y - centerY) / 10;
      const angleY = (centerX - x) / 10;
      
      icon.style.transform = `perspective(500px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.2)`;
    });
    
    icon.addEventListener('mouseenter', () => {
     
      const platformClass = iconElement.className.match(/fa-(facebook-f|twitter|instagram|linkedin-in)/);
      if (platformClass) {
        const colors = {
          'facebook-f': '#4c6fbaff',
          'twitter': '#1DA1F2',
          'instagram': '#E1306C',
          'linkedin-in': '#0077B5'
        };
        iconElement.style.color = colors[platformClass[1]];
      }
      
     
      iconElement.style.filter = 'drop-shadow(0 0 8px currentColor)';
      
      icon.style.animation = 'socialBounce 0.5s ease-out';
    });
    
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = '';
      icon.style.animation = '';
      iconElement.style.color = originalColor;
      iconElement.style.filter = '';
    });
  });

 
  const animatedElements = document.querySelectorAll(
    '.course-card, .feature, .btn, .modal-content, nav ul li a, .hero-image img, .social-icons a'
  );

  animatedElements.forEach(el => {
    el.style.willChange = 'transform, opacity, box-shadow, filter';
  });
});

const heroImage = document.querySelector('.hero-image img');
if (heroImage) {
  heroImage.style.transition = 'transform 0.5s ease-out';
}

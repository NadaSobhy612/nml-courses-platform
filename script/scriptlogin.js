const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const myProfileSection = document.getElementById('myProfileSection');
const profileUserName = document.getElementById('profileUserName');
const enrolledCoursesList = document.getElementById('enrolledCoursesList');
const logoutBtn = document.getElementById('logoutBtn');
const profilePicture = document.getElementById('profilePicture');
const uploadProfilePicture = document.getElementById('uploadProfilePicture');
const changePictureBtn = document.getElementById('changePictureBtn');


const profileNavPlaceholder = document.getElementById('profileNavPlaceholder');
const navProfilePic = document.getElementById('navProfilePic');
const navUserName = document.getElementById('navUserName');
const loginNav = document.getElementById('loginNav');
const signupNav = document.getElementById('signupNav');



signUpButton?.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton?.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

document.getElementById('navSignIn')?.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.remove('right-panel-active');
});

document.getElementById('navSignUp')?.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.add('right-panel-active');
});


const signInForm = document.querySelector('.sign-in-container form');
const signUpForm = document.querySelector('.sign-up-container form');


signUpForm?.addEventListener('submit', (e) => {
  e.preventDefault(); 
  
  const nameInput = signUpForm.querySelector('input[type="text"]');
  const emailInput = signUpForm.querySelector('input[type="email"]');
  const passwordInput = signUpForm.querySelector('input[type="password"]');

  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  
  if (!name || !email || !password) {
    alert('Please fill in all fields to register a new account.');
    return; 
  }

  
  const users = JSON.parse(localStorage.getItem('users')) || {};

  
  if (users[email]) {
    alert('This email is already registered. Please log in or use another email.');
    return; 
  }

  
  users[email] = { name: name, password: password, profilePic: 'image/default-profile.png', enrolledCourses: [] }; 
  localStorage.setItem('users', JSON.stringify(users)); 

  alert('Your account has been successfully registered! You can now log in.');

  
  container.classList.remove('right-panel-active');

  
  nameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
});


signInForm?.addEventListener('submit', (e) => {
  e.preventDefault(); 

  
  const emailInput = signInForm.querySelector('input[type="email"]');
  const passwordInput = signInForm.querySelector('input[type="password"]');

  
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim(); 
  if (!email || !password) {
    alert('Please enter your email and password.');
    return; 
  }

  
  const users = JSON.parse(localStorage.getItem('users')) || {};

  
  if (users[email] && users[email].password === password) {
    alert('Login successful!');
    
    localStorage.setItem('loggedInUser', email);

    
    if (window.location.pathname.includes('login.html')) {
      window.location.href = "profile.html"; 
    } else {
      checkLoginStatusAndDisplayNav(); 
    }

  } else {
    alert('Incorrect email or password.');
  }
});


function showProfilePage(userEmail) {
 
  if (myProfileSection) {
    if (container) container.style.display = 'none'; 
    myProfileSection.style.display = 'block'; 

    const users = JSON.parse(localStorage.getItem('users')) || {};
    const currentUser = users[userEmail];

    if (currentUser) {
      profileUserName.textContent = currentUser.name || userEmail; 
      profilePicture.src = currentUser.profilePic || 'image/default-profile.png'; 

      
      const enrolledCourses = currentUser.enrolledCourses || []; 
      enrolledCoursesList.innerHTML = ''; 
      if (enrolledCourses.length > 0) {
        enrolledCourses.forEach(courseTitle => {
          const li = document.createElement('li');
          li.textContent = courseTitle;
          enrolledCoursesList.appendChild(li);
        });
      } else {
        const li = document.createElement('li');
        li.textContent = "You haven't enrolled in any courses yet.";
        enrolledCoursesList.appendChild(li);
      }
    }
  }
}

// Handle logout
logoutBtn?.addEventListener('click', () => {
  localStorage.removeItem('loggedInUser'); 
  
  if (myProfileSection) myProfileSection.style.display = 'none'; 
  if (container) container.style.display = 'block'; 
  window.location.href = "main.html"; 
});


changePictureBtn?.addEventListener('click', () => {
  uploadProfilePicture.click(); 
});

uploadProfilePicture?.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePicture.src = e.target.result; 
      
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        if (users[loggedInUser]) {
          users[loggedInUser].profilePic = e.target.result;
          localStorage.setItem('users', JSON.stringify(users));
          
          if (navProfilePic) navProfilePic.src = e.target.result;
        }
      }
    };
    reader.readAsDataURL(file);
  }
});


function checkLoginStatusAndDisplayNav() {
      const loggedInUserEmail = localStorage.getItem('loggedInUser');
      const users = JSON.parse(localStorage.getItem('users')) || {};
      const currentUser = users[loggedInUserEmail];

      if (loggedInUserEmail && currentUser) {
       
        if (profileNavPlaceholder) {
          profileNavPlaceholder.style.display = 'inline-block';
          navProfilePic.src = currentUser.profilePic || 'image/default-profile.png';
          navUserName.textContent = currentUser.name || loggedInUserEmail;
        }
        if (loginNav) loginNav.style.display = 'none';
        if (signupNav) signupNav.style.display = 'none';
      } else {
        
        if (profileNavPlaceholder) {
          profileNavPlaceholder.style.display = 'none';
        }
        if (loginNav) loginNav.style.display = 'inline-block';
        if (signupNav) signupNav.style.display = 'inline-block';
      }
    }
document.addEventListener('DOMContentLoaded', () => {
  checkLoginStatusAndDisplayNav(); 

  const loggedInUser = localStorage.getItem('loggedInUser');
  
  if (window.location.pathname.includes('login.html')) {
    if (loggedInUser) {
    
      window.location.href = "profile.html";
    } else {
      
      const hash = window.location.hash;
      if (hash === '#signup') {
        container.classList.add('right-panel-active');
      } else if (hash === '#signin') {
        container.classList.remove('right-panel-active');
      }
      container.style.display = 'block';
      if (myProfileSection) myProfileSection.style.display = 'none';
    }
  } else if (window.location.pathname.includes('profile.html')) {
    if (loggedInUser) {
      showProfilePage(loggedInUser);
    } else {
   
      window.location.href = "login.html";
    }
  }
});


const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
    dots[i].classList.toggle('active', i === index);
  });
  currentIndex = index;
}

document.querySelector('.next')?.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

document.querySelector('.prev')?.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    showSlide(index);
  });
});


if (slides.length > 0) {
  showSlide(currentIndex);
}


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = link.getAttribute('href');
    if (target.startsWith('#')) {
      e.preventDefault();
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

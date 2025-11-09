const coursesData = {
  "python": {
    title: "Python for Beginners",
    image: "image/python.jpg",
    videos: [
      { title: "Introduction to Python", src: "https://www.youtube.com/embed/rfscVS0vtbw" },
      { title: "Python Basics", src: "https://www.youtube.com/embed/rfscVS0vtbw" },
      { title: "Data Structures in Python", src: "https://www.youtube.com/embed/rfscVS0vtbw" }
    ],
    description: "Learn Python from scratch with real-world examples and projects. This comprehensive course covers fundamental concepts, data structures, object-oriented programming, and practical applications. You'll build several projects to solidify your understanding.",
    duration: "6 weeks",
    lectures: "24 Lectures",
    price: "$49.99",
    payment: "Visa / PayPal / Vodafone Cash / Fawry / Bank Transfer",
    instructor: "Dr. Sarah El-Masry",
    link: "https://www.w3schools.com/python/"
  },
  "web": {
    title: "Full Stack Web Development",
    image: "image/web.jpg",
    videos: [
      { title: "HTML Fundamentals", src: "https://www.youtube.com/embed/q3yFo-t1ykw" },
      { title: "CSS Fundamentals", src: "https://www.youtube.com/embed/Z-5QVutAEW4" },
      { title: "JavaScript Essentials", src: "https://www.youtube.com/embed/N1WUJe8GgbM" },
      { title: "React Introduction", src: "https://www.youtube.com/embed/fJSFus0pxZI" }
    ],
    description: "Master front-end & back-end web development with real apps. This course dives deep into HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. You'll learn to build dynamic and responsive web applications from scratch.",
    duration: "8 weeks",
    lectures: "32 Lectures",
    price: "$69.99",
    payment: "Visa / MasterCard / PayPal / Vodafone Cash",
    instructor: "Eng. Ahmed Kamal",
    link: "https://developer.mozilla.org/en-US/docs/Learn"
  },
  "ai": {
    title: "AI Essentials",
    image: "image/ai.jpg",
    videos: [
      { title: "What is AI?", src: "https://www.youtube.com/embed/ua-CiDNNj30" },
      { title: "Machine Learning Basics", src: "https://www.youtube.com/embed/ua-CiDNNj30" },
      { title: "Neural Networks", src: "https://www.youtube.com/embed/ua-CiDNNj30" }
    ],
    description: "Understand the fundamentals of AI and Machine Learning. Explore concepts like supervised and unsupervised learning, neural networks, and deep learning. This course provides a solid foundation for anyone interested in artificial intelligence.",
    duration: "5 weeks",
    lectures: "20 Lectures",
    price: "$59.99",
    payment: "Credit Card / Vodafone Cash / Fawry",
    instructor: "Prof. Laila Nabil",
    link: "https://www.ibm.com/topics/artificial-intelligence"
  },
  "Data": {
    title: "Intro to Data Science",
    image: "image/Data.jpg",
    videos: [
      { title: "Data Science Overview", src: "https://www.youtube.com/embed/ua-CiDNNj30" },
      { title: "Pandas for Data Analysis", src: "https://www.youtube.com/embed/ua-CiDNNj30" },
      { title: "Data Visualization", src: "https://www.youtube.com/embed/ua-CiDNNj30" }
    ],
    description: "Analyze data, build models, and get insights using Python. Learn data manipulation with Pandas, data visualization with Matplotlib and Seaborn, and machine learning basics with Scikit-learn. Perfect for aspiring data scientists.",
    duration: "7 weeks",
    lectures: "28 Lectures",
    price: "$54.99",
    payment: "Visa / PayPal / Bank Transfer",
    instructor: "Dr. Omar Hassan",
    link: "https://www.datacamp.com/courses/introduction-to-data-science-in-python"
  },
  "Graphic": {
    title: "Video Editing",
    image: "image/vedio.jpg",
    videos: [
      { title: "Design Principles", src: "https://www.youtube.com/embed/Z96cWtM5Nvk" },
      { title: "Adobe Photoshop Basics", src: "https://www.youtube.com/embed/Z96cWtM5Nvk" },
      { title: "Typography & Color", src: "https://www.youtube.com/embed/Z96cWtM5Nvk" }
    ],
    description: "Design logos, posters, and more using modern tools like Adobe Photoshop and Illustrator. This course covers design principles, typography, color theory, and practical design projects to build your portfolio.",
    duration: "4 weeks",
    lectures: "16 Lectures",
    price: "$39.99",
    payment: "Visa / MasterCard / Vodafone Cash",
    instructor: "Ms. Mona Ali",
    link: "https://www.adobe.com/creativecloud/design.html"
  },
  "Digital": {
    title: "Digital Marketing 101",
    image: "image/markting.jpg",
    videos: [
      { title: "Intro to Digital Marketing", src: "https://www.youtube.com/embed/y_y_y_y_y_y" },
      { title: "Social Media Marketing", src: "https://www.youtube.com/embed/y_y_y_y_y_y" },
      { title: "SEO Fundamentals", src: "https://www.youtube.com/embed/y_y_y_y_y_y" }
    ],
    description: "Master social media, SEO, and paid ads to grow any business. Learn about content marketing, email marketing, analytics, and how to create effective digital marketing campaigns.",
    duration: "6 weeks",
    lectures: "24 Lectures",
    price: "$44.99",
    payment: "Visa / PayPal / Fawry",
    instructor: "Mr. Karim Mansour",
    link: "https://www.hubspot.com/digital-marketing"
  },
  "cyber": {
    title: "Cybersecurity Fundamentals",
    image: "image/cyber.jpg",
    videos: [
      { title: "Cybersecurity Overview", src: "https://www.youtube.com/embed/z_z_z_z_z_z" },
      { title: "Network Security", src: "https://www.youtube.com/embed/z_z_z_z_z_z" },
      { title: "Ethical Hacking Intro", src: "https://www.youtube.com/embed/z_z_z_z_z_z" }
    ],
    description: "Protect data and systems from cyber threats and vulnerabilities. This course covers network security, cryptography, ethical hacking basics, and incident response. Essential for anyone working with digital systems.",
    duration: "8 weeks",
    lectures: "32 Lectures",
    price: "$79.99",
    payment: "Visa / MasterCard / Bank Transfer",
    instructor: "Eng. Hany Fouad",
    link: "https://www.comptia.org/certifications/security"
  },
  "mobile": {
    title: "Mobile App Development",
    image: "image/mobile.jpg",
    videos: [
      { title: "Mobile Dev Intro", src: "https://www.youtube.com/embed/a_a_a_a_a_a" },
      { title: "React Native Basics", src: "https://www.youtube.com/embed/a_a_a_a_a_a" },
      { title: "UI/UX for Mobile", src: "https://www.youtube.com/embed/a_a_a_a_a_a" }
    ],
    description: "Build native and cross-platform mobile apps for Android & iOS. Learn with frameworks like React Native or Flutter, covering UI/UX design, API integration, and app deployment.",
    duration: "10 weeks",
    lectures: "40 Lectures",
    price: "$89.99",
    payment: "Visa / PayPal / Vodafone Cash",
    instructor: "Mr. Tarek Emad",
    link: "https://developer.android.com/develop/training/basics"
  },
  "startup": {
    title: "Embedded Systems",
    image: "image/emb.jpg",
    videos: [
      { title: "Startup Fundamentals", src: "https://www.youtube.com/embed/b_b_b_b_b_b" },
      { title: "Business Planning", src: "https://www.youtube.com/embed/b_b_b_b_b_b" },
      { title: "Funding Your Startup", src: "https://www.youtube.com/embed/b_b_b_b_b_b" }
    ],
    description: "Learn how to launch and scale your own business or startup. This course covers business planning, market research, funding, legal aspects, and growth strategies for new ventures.",
    duration: "5 weeks",
    lectures: "20 Lectures",
    price: "$49.99",
    payment: "Visa / MasterCard / Bank Transfer",
    instructor: "Dr. Noha Gamal",
    link: "https://www.coursera.org/courses?query=entrepreneurship"
  }
};


const params = new URLSearchParams(window.location.search);
const courseId = params.get("course");


const courseTitleElement = document.getElementById("courseTitle");
const courseImageElement = document.getElementById("courseImage");
const courseDescriptionElement = document.getElementById("courseDescription");
const courseDurationElement = document.getElementById("courseDuration");
const courseLecturesElement = document.getElementById("courseLectures");
const coursePriceElement = document.getElementById("coursePrice");
const coursePaymentElement = document.getElementById("coursePayment");
const courseInstructorElement = document.getElementById("courseInstructor");
const enrollCourseBtn = document.getElementById("enrollCourseBtn");
const courseVideoElement = document.getElementById("courseVideo");
const videoPlaylistContainer = document.getElementById("videoPlaylist");

// function to get payment icons
function getPaymentIcons(paymentMethods) {
  let iconsHtml = '';
  const methodMap = {
    'Visa': '<i class="fab fa-cc-visa"></i>',
    'MasterCard': '<i class="fab fa-cc-mastercard"></i>',
    'PayPal': '<i class="fab fa-paypal"></i>',
    'Vodafone Cash': '<i class="fas fa-mobile-alt"></i>', 
    'Fawry': '<i class="fas fa-money-bill-wave"></i>', 
    'Bank Transfer': '<i class="fas fa-bank"></i>', 
    'Credit Card': '<i class="fas fa-credit-card"></i>'
  };

  paymentMethods.split(' / ').forEach(method => {
    const icon = methodMap[method.trim()];
    if (icon) {
      iconsHtml += `<span class="payment-icon" title="${method.trim()}">${icon}</span>`;
    }
  });
  return iconsHtml;
}


if (courseId && coursesData[courseId]) {
  const course = coursesData[courseId];
  courseTitleElement.textContent = course.title;
  courseImageElement.src = course.image;
  courseDescriptionElement.textContent = course.description;
  courseDurationElement.textContent = course.duration;
  courseLecturesElement.textContent = course.lectures;

  
  coursePriceElement.innerHTML = `<span style="text-decoration: line-through; color: #888;">${course.price}</span> <span style="color: green; font-weight: bold;">FREE!</span>`;

  
  coursePaymentElement.innerHTML = `${course.payment} ${getPaymentIcons(course.payment)}`;

  courseInstructorElement.textContent = course.instructor;

  
  document.querySelector('.course-image-wrapper').classList.add('animated-image');
  document.querySelector('.course-info').classList.add('slide-in-right');
  enrollCourseBtn.classList.add('animated-button'); 
  // Function to check if user is enrolled
  function isUserEnrolled(userEmail, courseTitle) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const currentUser = users[userEmail];
    return currentUser && currentUser.enrolledCourses && currentUser.enrolledCourses.includes(courseTitle);
  }

  // Function to display videos or enrollment button
  function updateCourseContentDisplay() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser && isUserEnrolled(loggedInUser, course.title)) {
      
      enrollCourseBtn.style.display = 'none'; 
      videoPlaylistContainer.style.display = 'block'; 

      videoPlaylistContainer.innerHTML = ''; 
      course.videos.forEach((video, index) => {
        const videoButton = document.createElement('button');
        videoButton.classList.add('video-playlist-button');
        videoButton.textContent = `${index + 1}. ${video.title}`;
        videoButton.setAttribute('data-video-src', video.src);
        videoButton.addEventListener('click', () => {
          
          document.querySelectorAll('.video-playlist-button').forEach(btn => btn.classList.remove('active'));
        
          videoButton.classList.add('active');
          courseVideoElement.src = video.src;
          courseVideoElement.style.display = 'block'; 
        });
        videoPlaylistContainer.appendChild(videoButton);
      });

      // Optionally, auto-play the first video and set it as active
      if (course.videos.length > 0) {
        courseVideoElement.src = course.videos[0].src;
        courseVideoElement.style.display = 'block';
        // Set the first video button as active
        videoPlaylistContainer.querySelector('.video-playlist-button')?.classList.add('active');
      }

    } else {
      
      enrollCourseBtn.style.display = 'block'; 
      enrollCourseBtn.textContent = "Enroll Now"; 
      courseVideoElement.style.display = 'none'; 
      videoPlaylistContainer.style.display = 'none'; 
    }
  }

  // Handle "Enroll Course" button click
  enrollCourseBtn.addEventListener("click", () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const users = JSON.parse(localStorage.getItem('users')) || {};
      const currentUser = users[loggedInUser];

      if (currentUser) {
        
        if (!currentUser.enrolledCourses.includes(course.title)) {
          currentUser.enrolledCourses.push(course.title);
          localStorage.setItem('users', JSON.stringify(users)); 
          alert(`Congratulations, ${currentUser.name || loggedInUser}! You have successfully enrolled in: ${course.title}`);
          updateCourseContentDisplay(); 
        } else {
          alert(`You are already enrolled in: ${course.title}`);
          updateCourseContentDisplay(); 
        }
      }
    } else {
      alert("Please log in or create an account to enroll in this course.");
      window.location.href = "login.html"; 
    }
  });

  // Initial display update on page load
  updateCourseContentDisplay();

} else {
  document.querySelector("main").innerHTML = "<p style='text-align:center; font-size: 1.5rem; color: #b0554aff; animation: pulse 1s infinite alternate;'>Course not found. Please check the URL.</p>";
}

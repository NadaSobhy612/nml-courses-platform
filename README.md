# 🎓 NML Courses - Interactive E-Learning Platform

A modern, responsive, and feature-rich E-Learning Web Application designed to browse educational courses, manage enrollment, and customize user profile settings seamlessly. Built with vanilla JavaScript, HTML5, CSS3, and persistent browser storage.

---

## ✨ Key Features

* **🔐 User Authentication & Profiles:**
  * Interactive Sign In / Sign Up modal overlays.
  * Custom user profiles with dynamic avatar upload & local session persistence using `LocalStorage`.
* **📚 Dynamic Course System:**
  * Browse featured and category-specific courses (Python, Full Stack, Data Science, Embedded Systems, AI, etc.).
  * Dedicated course detail pages with interactive video playlists, metadata, and instant enrollment logic.
* **🌙 Dark / Light Mode Toggle:**
  * Smooth theme switching that saves user preferences across site navigation.
* **📱 Fully Responsive Design:**
  * Optimized layout and smooth user interface across mobile, tablet, and desktop devices.
* **💾 Local Storage Integration:**
  * Save enrolled courses, active user sessions, profile details, and theme settings locally without an external backend.

---

## 🛠️ Built With

* **HTML5:** Semantic site layout and accessible document structures.
* **CSS3:** Custom styles, CSS Flexbox/Grid, animated buttons, and theme variables.
* **JavaScript (ES6+):** Dynamic DOM manipulation, URL query parameter parsing, and LocalStorage handling.
* **FontAwesome:** Vector icons for UI controls, course badges, and social media links.

---

## 📁 Folder Structure

```text
├── css/
│   ├── style.css          # Main stylesheet & global themes
│   ├── stylelogin.css     # Authentication & profile overlay styles
│   └── all.css            # FontAwesome icons stylesheet
├── image/                 # Course thumbnails & default profile assets
├── script/
│   ├── script.js          # Core logic & theme management
│   ├── scriptlogin.js     # User authentication & LocalStorage state
│   └── coursedetails.js   # Dynamic course page loader
├── webfonts/              # FontAwesome webfont files
├── index.html             # Entry redirect document
├── main.html              # Home landing page
├── courses.html           # Full courses catalog
├── course-details.html    # Individual course details page
├── login.html             # Auth page & user profile modal
├── profile.html           # User dashboard page
└── README.md              # Project documentation
```
🚀 Future Enhancements
🏆 Add quiz & certificate generation upon course completion.

💳 Integrate online payment gateway sandbox for premium courses.

🔍 Add real-time live search & multi-category filtering on the courses page

# google-login
A stylish Google Login UI using Firebase Authentication. Features include dark/light mode toggle, animated logout, personalized greeting, and a simple dashboard. Entirely frontend-based with no custom backend—auth handled via Firebase Console.

`# 🔐 Google Login UI with Firebase Authentication

A sleek and modern login interface powered by Google Sign-In using Firebase Authentication. This project is completely frontend-based — no custom backend is used. The goal is to provide a user-friendly, visually appealing authentication experience.

---

## 🚀 Features

- 🔒 Secure Google Sign-In via Firebase Console
- 🌙 Light/Dark mode toggle
- 👋 Personalized greeting after login
- 🖥️ Minimalist dashboard interface
- 🚪 Logout functionality with smooth animation
- ⚡ 100% frontend — no backend/server required

---

## 🛠️ Built With

- **HTML**
- **CSS**
- **JavaScript**
- **Firebase Authentication**

---

## 🧩 Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/palak-s8/google-login.git
cd google-login

2. Set Up Firebase
Go to Firebase Console

Create a new project (or use an existing one)

Navigate to Authentication > Sign-in method and enable Google

Go to Project settings > General > Your apps and register a new Web App

Copy your Firebase config

3. Configure Your Project
Replace the placeholder config inside script.js:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  ...
};

4. Run the App
Just open index.html in your browser:

src/frontend/index.html

No server needed`
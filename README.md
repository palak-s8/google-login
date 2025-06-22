Here's your fully **cleaned, well-structured, and Markdown-corrected `README.md`** — incorporating your original content with correct formatting, headings, code blocks, and spacing:

---

````markdown
# 🔐 Google Login UI with Firebase Authentication

A stylish and modern Google Login interface built using Firebase Authentication. Features include dark/light mode toggle, animated logout, personalized greeting, and a clean dashboard. Entirely frontend-based with no custom backend—auth is handled via Firebase Console.

---

## 🚀 Features

- 🔒 Google Sign-In via Firebase Console  
- 🌙 Dark/Light mode toggle  
- 👋 Personalized greeting after login  
- 🖥️ Minimalist dashboard UI  
- 🚪 Logout with animation  
- ⚡ Fully frontend – no backend required  

---

## 🛠️ Built With

- HTML  
- CSS  
- JavaScript  
- Firebase Authentication  

---

## 🧩 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/palak-s8/google-login.git
cd google-login
````

---

### 2. Set Up Firebase

* Go to the [Firebase Console](https://console.firebase.google.com/)
* Create a new project (or use an existing one)
* Navigate to **Authentication > Sign-in method** and **enable Google**
* Go to **Project settings > General > Your apps** and register a new **Web App**
* Copy your Firebase configuration object

---

### 3. Configure Your Project

Replace the placeholder config inside `script.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

### 4. Run the App

Just open the file in your browser:

```bash
src/frontend/index.html
```

No server is needed.

---

## 🌐 Deployment

You can deploy this app using any static host:

* GitHub Pages
* Netlify
* Vercel
* Firebase Hosting

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 🙋‍♀️ Author

**Palak Shah**
GitHub: [@palak-s8](https://github.com/palak-s8)

---


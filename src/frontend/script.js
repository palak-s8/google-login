// ✅ Import Firebase SDK modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ✅ Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyA8mkyY1Q9fbGxqyKbAtl2TWV6zLvnNRPw",
  authDomain: "login-page-5f62f.firebaseapp.com",
  projectId: "login-page-5f62f",
  storageBucket: "login-page-5f62f.firebasestorage.app",
  messagingSenderId: "109810553770",
  appId: "1:109810553770:web:4e0544c062eef2797951d3",
  measurementId: "G-KT9JS4YL7G"
};

// ✅ Initialize Firebase and Firebase services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// ✅ Google Sign-In function
document.getElementById("loginBtn").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const user = result.user;

      // ✅ Save user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        lastLogin: new Date().toISOString()
      });

      // ✅ Display user info on the page
      document.getElementById("userInfo").innerHTML = `
        <p><strong>Welcome, ${user.displayName}</strong></p>
        <img src="${user.photoURL}" width="80" style="border-radius: 50%">
        <p>Email: ${user.email}</p>
      `;
    })
    .catch((error) => {
      console.error("Login error:", error);
      alert("Login failed. Check console for details.");
    });
});
// 🌙 Toggle dark/light mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});


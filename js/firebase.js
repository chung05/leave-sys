import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

export const firebaseConfig = {
  apiKey: "你的API_KEY",
  authDomain: "你的專案.firebaseapp.com",
  projectId: "你的專案ID",
};

export const app = initializeApp(firebaseConfig);

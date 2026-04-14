import { app } from "./firebase.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  addDoc,
  collection
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const auth = getAuth(app);
const db = getFirestore(app);

// 檢查登入
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
  }
});

// 送出請假
window.submitLeave = async function () {
  const user = auth.currentUser;

  await addDoc(collection(db, "leaveRequests"), {
    userEmail: user.email,
    startDate: document.getElementById("start").value,
    endDate: document.getElementById("end").value,
    reason: document.getElementById("reason").value,
    status: "pending_manager",
    createdAt: new Date()
  });

  document.getElementById("msg").innerText = "✅ 已送出請假";
};

// 登出
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};

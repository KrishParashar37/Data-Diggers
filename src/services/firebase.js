import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNzxZkCnUQQ51j_DzDs10DXgF_s2uxwFY",
  authDomain: "data-diggers-798ee.firebaseapp.com",
  projectId: "data-diggers-798ee",
  storageBucket: "data-diggers-798ee.firebasestorage.app",
  messagingSenderId: "330413813566",
  appId: "1:330413813566:web:473ae65d3eb1002195466f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

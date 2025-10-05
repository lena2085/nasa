// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8UdY_LtWdoJoO7pr9nPFM-iv2Wjn8gNk",
  authDomain: "bloomsphere-838b1.firebaseapp.com",
  projectId: "bloomsphere-838b1",
  storageBucket: "bloomsphere-838b1.appspot.com",
  messagingSenderId: "642304032609",
  appId: "1:642304032609:web:5e2a356ed613915e8acf20",
  measurementId: "G-ZGPND57JGD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

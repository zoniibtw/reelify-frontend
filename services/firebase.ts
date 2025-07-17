import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm6ya6XjuhkgdxYS-AGSBlae_g0T7R-RE",
  authDomain: "reelify-86fab.firebaseapp.com",
  projectId: "reelify-86fab",
  storageBucket: "reelify-86fab.firebasestorage.app",
  messagingSenderId: "438964609299",
  appId: "1:438964609299:web:657dad68e44470d3b0fae6",
  measurementId: "G-4D3GD62FRY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

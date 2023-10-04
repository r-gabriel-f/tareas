import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcZYn3SRdmT9xYIH7ld1h05F1j3wUpc3U",
  authDomain: "tareas-876ac.firebaseapp.com",
  projectId: "tareas-876ac",
  storageBucket: "tareas-876ac.appspot.com",
  messagingSenderId: "321565099212",
  appId: "1:321565099212:web:3dc737d391a3567f76ee69",
  measurementId: "G-BRY6G6K2X4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, firestore, googleAuthProvider };
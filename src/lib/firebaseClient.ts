//src/lib/firebaseClient.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg0Mwu6P6FloOItcYB97wNoqouin4spkU",
  authDomain: "fir-auth-final-project.firebaseapp.com",
  projectId: "fir-auth-final-project",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

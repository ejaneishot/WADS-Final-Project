import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg0Mwu6P6FloOItcYB97wNoqouin4spkU",
  authDomain: "fir-auth-final-project.firebaseapp.com",
  projectId: "fir-auth-final-project",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function run() {
  const cred = await signInWithEmailAndPassword(auth, "a@a.com", "123456");

  const token = await cred.user.getIdToken();
  console.log(token);
}

run();

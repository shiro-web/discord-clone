import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDmBOGDhIb_gGzIgDJk_GE8xqLuUqEtmLc",
  authDomain: "discord-clone-6e95c.firebaseapp.com",
  projectId: "discord-clone-6e95c",
  storageBucket: "discord-clone-6e95c.appspot.com",
  messagingSenderId: "58504220504",
  appId: "1:58504220504:web:a4b43f4967b2f07e19df2d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider =  new GoogleAuthProvider();

export {auth,provider,db};
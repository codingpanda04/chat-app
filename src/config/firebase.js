import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBLDDG4gLXAklBzS4BQhpmelLW8C8Lz2kU",
  authDomain: "chat-app-6e453.firebaseapp.com",
  projectId: "chat-app-6e453",
  storageBucket: "chat-app-6e453.appspot.com",
  messagingSenderId: "984830484077",
  appId: "1:984830484077:web:30c6bb44dd0495a7e12964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username,email,password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hi there, I'm using chat app",
            lastseen:Date.now()
        })
        await setDoc(doc(db,"chats",user.uid),{
            chatData:[]
        })
    } catch (error) {
        console.error(error)
        toast.error(error.code)
    }
}


export {signup}
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
    // Your Firebase configuration object goes here
    apiKey: "AIzaSyCEK4irWtP1f6y_J1Gj3kNwsyLdItndt5Y",
    authDomain: "sdkk-22bbc.firebaseapp.com",
    projectId: "sdkk-22bbc",
    storageBucket: "sdkk-22bbc.firebasestorage.app",
    messagingSenderId: "1039314059862",
    appId: "1:1039314059862:web:e14e764f77ce86c817b1f7",
    measurementId: "G-K0L3MMPDR7"
  }
  
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  
export async function addData(data:any){
    try {
        const docRef = await doc(db, 'pays', data.id!);
        const ref = await setDoc(docRef, data)
  
        console.log("Document written with ID: ", docRef.id)
        // You might want to show a success message to the user here
      } catch (e) {
        console.error("Error adding document: ", e)
        // You might want to show an error message to the user here
      }
}

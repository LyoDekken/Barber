import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgwLGlknshC5X_xSkJNL_akhhAVAMgpj4",
  authDomain: "my-app-cb0e1.firebaseapp.com",
  databaseURL: "https://my-app-cb0e1-default-rtdb.firebaseio.com",
  projectId: "my-app-cb0e1",
  storageBucket: "my-app-cb0e1.appspot.com",
  messagingSenderId: "435932813995",
  appId: "1:435932813995:web:9a6b77d2ef4df3b0fdf5ee",
  measurementId: "G-L4CVPBVYVC"
};

// Initialize Firebase

if(!firebase.getApp.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase;
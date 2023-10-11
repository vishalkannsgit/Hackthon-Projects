import firebase from "firebase";
//compat/app';
//import 'firebase/compat/auth';
//import'firebase/compat/firestore;

const firebaseConfig = {
  apiKey: "AIzaSyAPzg_mkj_7k2zy53stM-I8HOKxFVrBILY",
  authDomain: "test-623d5.firebaseapp.com",
  projectId: "test-623d5",
  storageBucket: "test-623d5.appspot.com",
  messagingSenderId: "196006050701",
  appId: "1:196006050701:web:e5fcd84291577c196cdbc4",
  measurementId: "G-DBMJC8T719"
};
let app;
if (!firebase.app.length===0){
  app =firebase.initialize(firebaseConfig);
//firebase.initialize(firebaseConfig);
}else{
  app.firebase.app()
}
//export {firebase};
const auth = firebase.auth()

export{auth};
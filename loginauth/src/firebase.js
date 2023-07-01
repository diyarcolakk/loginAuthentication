import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDZ1oMpUz5_OSoHeDpKCM8YegLBsq-y8ek",
  authDomain: "loginauthenticationtest-5784f.firebaseapp.com",
  projectId: "loginauthenticationtest-5784f",
  storageBucket: "loginauthenticationtest-5784f.appspot.com",
  messagingSenderId: "602844350739",
  appId: "1:602844350739:web:bb0f845cbeadf6745df2e6",
  measurementId: "G-B0V6BT79WD",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "expense-tracker-st.firebaseapp.com",
  databaseURL:
    "https://expense-tracker-st-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "expense-tracker-st",
  storageBucket: "expense-tracker-st.appspot.com",
  messagingSenderId: "1005080055346",
  appId: "1:1005080055346:web:6dc4c5182024b6943cf62b",
  measurementId: "G-VTFGP0ZY6B",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { auth, db };

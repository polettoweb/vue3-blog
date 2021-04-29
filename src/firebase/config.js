import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAi4oNKqU3P15KhVZChmBRpAXDSKCVCtGc",
  authDomain: "blog-vue3.firebaseapp.com",
  projectId: "blog-vue3",
  storageBucket: "blog-vue3.appspot.com",
  messagingSenderId: "270290266426",
  appId: "1:270290266426:web:61c9ed122fa13586de8803"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {
  projectFirestore,
  timestamp
}
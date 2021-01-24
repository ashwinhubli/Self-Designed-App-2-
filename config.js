import  firebase from 'firebase';
require('@firebase/firestore')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIBAAAqNzX_V1g_oe8CX-gKiMhYyTSEs8",
  authDomain: "my-home-work-app.firebaseapp.com",
  projectId: "my-home-work-app",
  storageBucket: "my-home-work-app.appspot.com",
  messagingSenderId: "567467942657",
  appId: "1:567467942657:web:8035905d9a23b1ac693100",
  measurementId: "G-6PVF2V331N"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()

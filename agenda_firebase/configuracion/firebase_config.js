import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDNufez3eYS6T4_kvK8HhQ_qeDxQtqHrPE",
    authDomain: "contact-6dfed.firebaseapp.com",
    projectId: "contact-6dfed",
    storageBucket: "contact-6dfed.appspot.com",
    messagingSenderId: "598472629221",
    appId: "1:598472629221:web:b8ec90a4c208968e572d0c",
    measurementId: "G-N3ZER0E8ZF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export {db}
  
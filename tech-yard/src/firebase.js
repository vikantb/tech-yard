import firebase from 'firebase' ;

var firebaseConfig = {
    apiKey: "AIzaSyCgTPXE-z_0Zm3l_vtf_DukZnj_czFuhQg",
    authDomain: "tech-yard-vsvs.firebaseapp.com",
    projectId: "tech-yard-vsvs",
    storageBucket: "tech-yard-vsvs.appspot.com",
    messagingSenderId: "816468094409",
    appId: "1:816468094409:web:1bc3a2ff10aaae66570c18",
    measurementId: "G-CY0YVMSNE7"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig) ;
  const db=firebaseApp.firestore() ;
  const auth=firebase.auth() ;
  const provider=new firebase.auth.GoogleAuthProvider() ;

  export { auth, provider } ;

  export default db ;
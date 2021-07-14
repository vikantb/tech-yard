const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

var firebaseConfig = {
  apiKey: "AIzaSyCgTPXE-z_0Zm3l_vtf_DukZnj_czFuhQg",
  authDomain: "tech-yard-vsvs.firebaseapp.com",
  projectId: "tech-yard-vsvs",
  storageBucket: "tech-yard-vsvs.appspot.com",
  messagingSenderId: "816468094409",
  appId: "1:816468094409:web:1bc3a2ff10aaae66570c18",
  measurementId: "G-CY0YVMSNE7"
};

firebase.initializeApp(firebaseConfig);

let provider= new firebase.auth.GoogleAuthProvider()

function signin_with_google(event){
    event.preventDefault();
    firebase.auth()
    .signInWithPopup(provider)
    .then((users) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = users.credential;
      var token = users.accessToken;
      result=users.user

      var user = {
        displayName:result.displayName, 
        email:result.email,
        photoURL:result.photoURL
      }

      fetch('/serverUpdate', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json())
      .then(json => console.log(json));

      console.log(user)
      // window.location.href="/home?user="+user.displayName;
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
}

function login(event){
    event.preventDefault();
    let email= document.querySelector('#signin_mail').value
    let password= document.querySelector('#signin_password').value

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => { console.log('user signed in')
          // Signed in
          var user = userCredential.user;
                fetch('https://jsonplaceholder.typicode.com/todos', {
                  method: 'POST',
                  body: JSON.stringify(user),
                  headers: { 'Content-Type': 'application/json' }
                }).then(res => res.json())
                .then(json => console.log(json));
            })
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log('problem in sign in')
      });
}

function signUp(event){
    event.preventDefault();
    let email= document.querySelector('#signup_mail').value
    let password= document.querySelector('#signup_password').value

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => { console.log('user created')
      // Signed in 
      var user = userCredential.user;
      fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json())
      .then(json => console.log(json));
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error occured in creating user")
    });
}
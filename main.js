const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAmOYlpE3PxUUDT7Z6TP2T7b8YvK-2CLSY",
    authDomain: "auth-form-21e21.firebaseapp.com",
    projectId: "auth-form-21e21",
    storageBucket: "auth-form-21e21.appspot.com",
    messagingSenderId: "777656414039",
    appId: "1:777656414039:web:baf9fe806d7dc571831812",
    measurementId: "G-XMW6GQYE9L"
  });
  
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  
  const signUp = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Check if email and password are not empty
    if (!email || !password) {
      console.log("Please provide both email and password");
      return;
    }
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User successfully registered
        document.write("Signed Up successfully")
        console.log("User registered successfully");
        // You can use userCredential.user to get user details if needed
      })
      .catch((error) => {
        // Handle errors during registration
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  }
  

  const logIn = ()=>{
    const email = document.getElementById("mail").value;
    const password = document.getElementById("pass").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // User successfully registered
        document.write("Logged in successfully")
        console.log("You're logged in successfully");
        console.log(userCredential);
        // You can use userCredential.user to get user details if needed
      })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(errorCode, errorMessage);
  });
}

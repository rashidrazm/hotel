<script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
    import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyA416MDKYN0dqeqWRsxvH2XtlSb_gBdXJ8",
      authDomain: "restuarent-food.firebaseapp.com",
      databaseURL: "https://restuarent-food-default-rtdb.firebaseio.com",
      projectId: "restuarent-food",
      storageBucket: "restuarent-food.appspot.com",
      messagingSenderId: "283383752657",
      appId: "1:283383752657:web:e907d0d9d2dd5c822522f0"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();


     signUp.addEventListener('click',(e) => {

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var username = document.getElementById('username').value;



        createUserWithEmailAndPassword(auth, email, password)
           .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            set(ref(database, 'users/' + user.uid),{
                username: username,
                email: email
            })
            alert('user created');
            // ...
            })
           .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;

              alert(errorMessage);
            // ..
            });

     });

     login.addEventListener('click',(e) => {


        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;


        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
         // Signed in 
           const user = userCredential.user;

           const dt = new Date();
           update(ref(database, 'users/' + user.uid),{
                last_login:dt,
            })

            alert('User loged in!');  
        // ...
        })
          .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          alert(errorMessage);

          });
         });

         const user = auth.currentUser;
         onAuthStateChanged(auth, (user) => {
        if (user) {
         // User is signed in, see docs for a list of available properties
         // https://firebase.google.com/docs/reference/js/auth.user
         const uid = user.uid;
         // ...
         } else {
         // User is signed out
          // ...
           }
         });

         logout.addEventListener('click',(e) =>{
            signOut(auth).then(() => {
           // Sign-out successful.
             alert('user loged out'); 
           }).catch((error) => {
             // An error happened.
             const errorCode = error.code;
          const errorMessage = error.message;

          alert(errorMessage);
            });
         })


  </script>

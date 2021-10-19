import { getAuth,signOut ,GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signInWithPopup,GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import iniAuthentication from "../Firebase/Firebase.init";

iniAuthentication();
const useFirebase=()=>{

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    // All State Here

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const [user,setUser]=useState("");

    // Signin With Google

    const googleSignIn=()=>{
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      }).catch((error) => {
        setError(error.message)
      });
    }
    // Sign in With Github

    const gitHubSignIn=()=>{
      signInWithPopup(auth, gitHubProvider)
      .then((result) => {
      const user = result.user;
      setUser(user)
      console.log(result.user);
  }).catch((error) => {
    setError(error.message)
    console.error(error.message);
  });
    }
    // Create New User With Email & Password

    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value)        
    }
    const handleRegister=(event)=>{
        event.preventDefault();
        console.log(password,email);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
            console.log(user);
          })
          .catch((error) => {
            setError(error.message)
          });
    }
    // Handle Sign in Existing User

    const handleSignIn=(event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {            
        const user = userCredential.user;
        setUser(user);
        console.log(user);
  })
  .catch((error) => {
    setError(error.message)
  });
    }
    // Handle Sign Out

    const handleSignOut=()=>{
      const auth = getAuth();
      signOut(auth).then(() => {

    }).catch((error) => {
      setError(error.message)
    });
    }
     // observe whether user auth state changed or not
     useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
          if(user){
              setUser(user)
          }else{
            setUser("")
          }
      })
  },[])

return{handleEmail,handlePassword,handleRegister,error,user,handleSignIn,handleSignOut,googleSignIn,gitHubSignIn}
}

export default useFirebase;
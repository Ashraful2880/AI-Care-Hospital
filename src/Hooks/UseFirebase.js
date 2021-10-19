import firebaseAuthentication from "../Firebase/Firebase.init";
import {getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseAuthentication();


const UseFirebase=()=>{
    //-------------> All State Here <-------------//
    const [user,setUser]=useState({});
    const [error,setError]=useState("");
    const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    //--------------> Google Pop Up Sign In <---------------//

    const googleSignIn=()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user);
        }).catch(error=>{
            setError(error.message)
        })
    }

    //-------------> Github Pop Up Sign In <-----------//

    const gitHubSignIn=()=>{
        signInWithPopup(auth, gitHubProvider)
        .then(result=>{
            setUser(result.user);
        }).catch(error=>{
            setError(error.message)
        })
    }
    //-------------> Create New User <-----------//

    const handleName=(event)=>{
        setUserName(event.target.value);
    }
    const handleEmail=(event)=>{
        setEmail(event.target.value);
    }

    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }

    //-------------> Register Handler <-------------//

    const handleRegister=(event)=>{
        event.preventDefault();
        if(password<6){
            setError("Password should be at least 6 character");
            return;
        }
        console.log(userName);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            setUser(result.user);
            console.log(result.user);
        }).catch(error=>{
            setError(error.message)
        })
    }

    //----------------> SignIn With Email & Password <----------------//

    const signInHandler=(event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            setUser(result.user);
        }).catch(error=>{
            setError(error.message)
        })
    }

    //--------------> Sign Out Handler <-------------//

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            setError(error.message)
          });
    }

    //--------------> Observe User State Changed Or Not <-------------//

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }else{
                setError(error.message)
            }
        })
    },[])
    return{googleSignIn,gitHubSignIn,handleSignOut,handleName,handleEmail,handlePassword,handleRegister,signInHandler,user,error,userName}
}
export default UseFirebase;
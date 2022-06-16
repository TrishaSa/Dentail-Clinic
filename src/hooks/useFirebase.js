import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, updateProfile, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import initFirebaseAuth from "../Firebase/firebase.init";

initFirebaseAuth()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
      return signInWithPopup(auth, googleProvider)
    }
    
    const logOut = () =>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError('')
          });
    }

    const createAccount = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => { 
        const user = result.user;
        setUser(user)
        setError('')
        setUserName(name)
  })
  .catch((error) => {
    setError(error.message);
  });
    }

    const setUserName = (name) => {
      updateProfile(auth.currentUser, { displayName: name }).then(() => {});
  };

    const processLogin = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } 
          });
          
    }, [])

    return {
        user,
        signInUsingGoogle,
        error,
        logOut,
        createAccount,
        processLogin
    }
}

export default useFirebase;
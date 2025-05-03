import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, signInWithPopup,  createUserWithEmailAndPassword,signInWithEmailAndPassword,TwitterAuthProvider, onAuthStateChanged, getAuth, signOut} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user)
    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const handleLoginGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const googleUser = result.user;
          setUser(googleUser);
        }).catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }

    const handleLoginTwitter = () => {
        signInWithPopup(auth, twitterProvider)
        .then((result) => {
            const twitterUser = result.user;
            setUser(twitterUser);
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            
        });

    }

    const handleRegistration = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => { 
        const passwordUser = userCredential.user;
        setUser(passwordUser);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });

    }

    const handleLoginWithPassword = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
            const passwordLoginUser = userCredential.user;
            setUser(passwordLoginUser)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });

    }

    const handleLogout = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
        }).catch((error) => {
        console.log(error)
        });

    }
   

    const userValue = {
        handleLoginWithPassword, 
        handleLoginGoogle,
        handleLoginTwitter,
        handleRegistration,
        handleLogout,
        user

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
      
        return () => {
          unsubscribe();
        }
      }, []);


    return (
        <AuthContext value={userValue}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
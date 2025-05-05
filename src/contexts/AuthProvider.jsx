import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, signInWithPopup,  createUserWithEmailAndPassword,signInWithEmailAndPassword,TwitterAuthProvider, onAuthStateChanged, signOut, sendEmailVerification, sendPasswordResetEmail, updateProfile} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import Swal from 'sweetalert2';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [loading,setLoading] = useState(true)

    const handleLoginGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const googleUser = result.user;
          setUser(googleUser);
          Swal.fire('Login Successful', 'You have successfully logged in.', 'success');
        }).catch((error) => {
          Swal.fire('Error', error.message, 'error');
        });
    }

    const handleLoginTwitter = () => {
        signInWithPopup(auth, twitterProvider)
        .then((result) => {
            const twitterUser = result.user;
            setUser(twitterUser);
            Swal.fire('Login Successful', 'You have successfully logged in.', 'success');
        }).catch((error) => {
            Swal.fire('Error', error.message, 'error');
            
        });

    }

    const handleRegistration = (email, password, name, profileImage) => {
        createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => { 
        const passwordUser = userCredential.user;
        setUser(passwordUser);

        // update profile
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: profileImage
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });

        sendEmailVerification(auth.currentUser)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Registered!',
              text: 'We have sent you a verification email. Please verify to activate your account.',
              showConfirmButton: true
            });
            
          })
        })

        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                Swal.fire('Email Already Registered', 'This email is already registered! Please try logging in.', 'error');
              } else if (error.code === 'auth/invalid-email') {
                Swal.fire('Invalid Email', 'Please enter a valid email address.', 'error');
              } else {
                Swal.fire('Error', error.message, 'error');
              }
        });

    }

    const handleLoginWithPassword = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
            const passwordLoginUser = userCredential.user;
            setUser(passwordLoginUser);
            Swal.fire('Login Successful', 'You have successfully logged in.', 'success');
        })
        .catch((error) => {
            if (error.code === 'auth/invalid-email') {
                Swal.fire('Invalid Email', 'Please enter a valid email address.', 'error');
              } else if (error.code === 'auth/user-not-found') {
                Swal.fire('No User Found', 'No user found with this email.', 'error');
              } else {
                Swal.fire('Wrong Password', 'Incorrect password! Please try again.', 'error');
              }
        });

    }

    const handleLogout = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "Do you really want to log out?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log out!'
      }).then((result) => {
        if (result.isConfirmed) {
          signOut(auth)
            .then(() => {
              setUser(null);
              Swal.fire({
                icon: 'success',
                title: 'Logged Out!',
                text: 'You have been logged out successfully.',
                timer: 2000,
                showConfirmButton: false
              });
            })
            .catch((error) => {
              console.log(error);
              Swal.fire('Error', error.message, 'error');
            });
        }
      });
    };


    // handle password reset

    const handlePasswordReset = (email) =>{
      sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire(
          'Password Reset Email Sent!',
          'Please check your email to reset your password.',
          'success'
        );
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          Swal.fire('Invalid Email', 'Please enter a valid email address.', 'error');
        } else if (error.code === 'auth/user-not-found') {
          Swal.fire('No User Found', 'No user found with this email.', 'error');
        } else {
          Swal.fire('Error', error.message, 'error');
        }
      });
    }
    
   

    const userValue = {
        handleLoginWithPassword, 
        handleLoginGoogle,
        handleLoginTwitter,
        handleRegistration,
        handleLogout,
        user,
        passwordError,
        confirmPasswordError,
        nameError,
        emailError,
        setPasswordError,
        setConfirmPasswordError,
        setNameError,
        setEmailError,
        handlePasswordReset,
        loading

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false)
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
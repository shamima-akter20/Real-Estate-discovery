import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { app } from "./Firebase/firebase.config";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);
  
  const axiosSecure = useAxiosSecure()
   const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
   }
   
   const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
   }
   
   const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
   }

   const logOut = () => {
    setLoading(true);
    return signOut(auth);
   }

   const updateUserProfile = (name, photo) =>{
   return updateProfile(auth.currentUser, {
      displayName: name, photoURL:photo
    });
   }


   useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
        if(currentUser){
          axiosSecure.post('/createToken', {email: currentUser?.email})
          .then(()=> {
            console.log('token created');
          })
        }else{
          axiosSecure.delete('/deleteToken')
          .then(()=>{
            console.log('token Deleted');
          })
        }
        
      });
      return () => {
        return unsubscribe();
      }
   }, [])

   const authInfo = {
     user,
     loading,
     createUser,
     signIn,
     logOut,
     updateUserProfile,
     googleSignIn
   }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
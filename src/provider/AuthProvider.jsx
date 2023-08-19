import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  FacebookAuthProvider,
  sendPasswordResetEmail
} from "firebase/auth";

import { app } from "../firebase/firebase.config";
import { useQuery } from "@tanstack/react-query";
import useLocalStorage from "../hooks/useLocalStorage";


export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        console.log("signOut successfully");
      })
      .catch((err) => console.log(err));
  };
  //login with google
  const googleProvider = new GoogleAuthProvider();

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

//LOGIN WITH FB
const fbProvider = new FacebookAuthProvider();
const signInFB = () => {
  setLoading(true);
  return signInWithPopup(auth, fbProvider);
};




  const profileUpdate = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      
    });

    return () => unSubscribe();
  }, []);

  
  // add to cart data fetch by Tonmoy

  const { getValue} = useLocalStorage();

  const { refetch: cartRefetch,  data: addToCartData=[] } = useQuery({
    queryKey: [],
    
    queryFn: async ()=>{
    
        const res= await getValue("cartItems", []);

        return res
    } ,
})



  //  end



  // console.log(auth, user);
  const authInfo = {
    user,
    auth,
    createUser,
    signIn,
    logOut,
    signInGoogle,
    loading,
    setLoading,
    profileUpdate,
    signInFB,
    sendPasswordResetEmail,
    addToCartData,
    cartRefetch
    
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

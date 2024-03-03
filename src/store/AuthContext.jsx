import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUpFn = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      favoriteMovies: [],
      favoriteTv: [],
    });
    return;
  };
  const logInFn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutFn = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ signUpFn, logInFn, logOutFn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

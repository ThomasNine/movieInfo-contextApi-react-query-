import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUpFn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
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

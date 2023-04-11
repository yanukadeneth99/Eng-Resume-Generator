import { useState, useEffect } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  User,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { useRouter } from "next/router";

const formatAuthUser = (user: any) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState({ uid: null, email: null });
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState: User | null) => {
    if (!authState) {
      setLoading(false);
      return;
    }

    setLoading(true);

    var formattedUser = formatAuthUser(authState);

    setAuthUser(formattedUser);

    setLoading(false);
  };

  const clear = () => {
    setAuthUser({ uid: null, email: null });
    setLoading(true);
  };

  const _signInWithEmailAndPassword = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const _signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

    return signInWithPopup(auth, provider);
  };

  const _signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const _createUserWithEmailAndPassword = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const _signOut = () => signOut(auth).then(clear);

  useEffect(() => {
    onAuthStateChanged(auth, authStateChanged);
  }, []);

  return {
    authUser,
    loading,
    _signInWithEmailAndPassword,
    _signInWithGoogle,
    _signInWithFacebook,
    _createUserWithEmailAndPassword,
    _signOut,
  };
}

import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const style = {
  wrapper: `flex justify-center`,
};

const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in: ", error.message, error.code, error);
  }
};

const SignIn = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;

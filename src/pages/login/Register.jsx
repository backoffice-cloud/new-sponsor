import "./register.scss";
import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

import { useNavigate, Link } from "react-router-dom";
import google from "../../imgs/google.PNG";
import facebook from "../../imgs/facebook.png";
import { getDatabase, ref, set } from "firebase/database";

const Register = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmMail, setConfirmMail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const writeUserData = (userId, email, displayName) => {
    const db = getDatabase();
    set(ref(db, "users/" + userId + "/user-details"), {
      email,
      displayName,
    });
  };
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      localStorage.setItem("uid", user.uid);
      writeUserData(user.uid, user.email, user.displayName);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res + "im here123");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // ...
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    if (email !== confirmMail) {
      setError("emails don't match");
      return;
    }
    if (password !== confirmPassword) {
      setError("passwords don't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        setError("Invalid email or password");
      });
  };

  return (
    <div className="register">
      <form onSubmit={handleLogin}>
        <h1>iintoo</h1>
        <img
          className="auth-icon"
          src={google}
          alt="google"
          onClick={signInWithGoogle}
        />
        {/* <img className="auth-icon" src={facebook} alt="facebook" onClick={signInWithFacebook}/> */}

        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="email"
          placeholder="confirm email"
          onChange={(e) => setConfirmMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        {error && <span>{error}</span>}
        <p>
          Already have an account? <Link to="/login">Sign In</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;

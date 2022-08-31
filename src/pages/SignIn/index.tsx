
import * as Icon from "phosphor-react";

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";

import { auth } from "../../services/firebase";

import "./style.scss";
import { useState } from "react";

export function SignIn() {
  const [user, setUser] = useState<User>({} as User);

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);{ GoogleLogo}
      });
  }
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  return (
    <div className="container">
      <div className="user">
        {user.photoURL ? (
          <img src={photoURL?.toString()}></img>
        ) : (
          <div className="circle">
            <Icon.User size={76} color="#fff" />
          </div>
        )}

        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>
      <h1>Acesse sua conta</h1>
      <span>Utilizando autenticação social com Google</span>
      <button type="button" className="button" onClick={handleGoogleSignIn}>
        <Icon.GoogleLogo /> Entrar com o Google
      </button>
    </div>
  );
}

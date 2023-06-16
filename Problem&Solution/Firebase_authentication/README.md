***From ChatGpt***  
```
import { SiGoogle, SiFacebook } from "react-icons/si";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

initializeApp(config);
const auth = getAuth();

const LoginPage = () => {
  const handleSignIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        // Handle successful sign-in
        console.log(result.user);
      })
      .catch((error) => {
        // Handle sign-in error
        console.error(error);
      });
  };

  return (
    <div id="login-page">
      <div id="login-card">
        <h1>Welcome to Courier</h1>
        <div className="login-button google" onClick={handleSignIn}>
          <SiGoogle />
          Sign in with Google
        </div>
        <br></br>
        <div className="login-button facebook">
          <SiFacebook />
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
```

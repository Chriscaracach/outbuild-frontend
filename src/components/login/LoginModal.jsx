import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Modal } from "rsuite";

const LoginModal = ({ isOpen, onRequestClose }) => {
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful login
        console.log("User signed in:", result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.error("Error during sign in:", error);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
    >
      <h2>Not Logged In</h2>
      <p>Please use your Google account to log in.</p>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </Modal>
  );
};

export default LoginModal;

import "rsuite/dist/rsuite.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Board from "./Board";
import LoginModal from "./LoginModal";

function App() {
  const auth = getAuth();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div className="blurred-board">
        <Board />
        <LoginModal />
      </div>
    );
  }

  // If the user is logged in, show the board

  return <></>;
}

export default App;

// App.tsx
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
// auth import missing due to broken firebaseConfig export
import Register from "./Register";
import Login from "./Login";
import { auth } from "./firebaseConfig";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Incorrectly calling onAuthStateChanged without `auth`
    onAuthStateChanged((currentUser) => setUser(currentUser));
  }, []);

  const handleLogout = async () => {
      try {
          await signOut(auth);
          alert("Logged out!");
      } catch (err: unknown) {
          console.error("Logout error:", err instanceof Error ? err.message : 'An error occurred');
      }
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <button onClick={() => handleLogout()}>Logout</button>
        </div>
      ) : (
        <>
          <Register />
          <Login />
        </>
      )}
    </div>
  );
};

export default App;
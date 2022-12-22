import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, Login } from "./containers";

import { getAuth } from "firebase/auth";
import { app } from "./config/firebase.config";
import { validateJWTToken } from "./api";

const App = () => {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("before Rendering");
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((token) => {
          validateJWTToken(token).then((data) => {
            console.log(data);
            navigate("/", { replace: true });
          });
        });
      }
    });
    return () => console.log("After Rendering");
  }, []);
  return (
    <div className="w-screen min-h-screen ">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

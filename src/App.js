import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home, Login } from "./containers";

import { getAuth } from "firebase/auth";
import { app } from "./config/firebase.config";
import { validateJWTToken } from "./api";
import { setUserDetailAction } from "./context/actions/userActions";
import { useDispatch } from "react-redux";
import { Loader } from "./components";

const App = () => {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("before Rendering");
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((token) => {
          validateJWTToken(token).then((data) => {
            console.log(data);
            dispatch(setUserDetailAction(data.data));
            navigate("/", { replace: true });
            setIsLoading(false);
          });
        });
      } else {
        navigate("/login", { replace: true });
      }
    });
    return () => console.log("After Rendering");
  }, []);
  return (
    <div className="w-screen min-h-screen ">
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;

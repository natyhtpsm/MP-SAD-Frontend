import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/Cadastro";
import { useState, useContext } from "react";
import AuthContext from "./constants/context";


function App() {
  const [user, setUser] = useState(0);
  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<SignupPage />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </>
  );
};

export default App;

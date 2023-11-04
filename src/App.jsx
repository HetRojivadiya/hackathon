import React from "react";
import { HashRouter,Route, Routes } from "react-router-dom";
import ChatInterface from "./Component/ChatInterface";
import SignInForm from "./Component/SignInForm";
import SignIn from "./Component/SignIn";
import Test from "./Component/PDF_test"

export default function App() {
  return (

       <HashRouter>
        <Routes>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/" element={<ChatInterface/>} />
          <Route path="/signin-form" element={<SignInForm/>} />
          <Route path="test" element={<Test/>} />
        </Routes>
         
    </HashRouter>
  );
}

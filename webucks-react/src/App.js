import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Nav from "./components/Nav/Nav";
// import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Detail from "./pages/Detail/Detail";
// import Signup from "./pages/Signup/Signup";
// import Main from "./pages/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/List" element={<List />} />
        <Route path="/Detail" element={<Detail />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Router;

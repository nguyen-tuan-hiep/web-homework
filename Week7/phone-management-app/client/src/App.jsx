import React from "react";
import AllPhones from "./components/Phones/GetAllPhones.jsx";
import CreatePhone from "./components/Phones/CreatePhone.jsx";
import NotFound from "./components/ErrorPage/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdatePhone from "./components/Phones/UpdatePhone.jsx";
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <Routes>
            <Route path="/" element={<AllPhones />} />
            <Route path="/create" element={<CreatePhone />} />
            <Route path="/update/:id" element={<UpdatePhone />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

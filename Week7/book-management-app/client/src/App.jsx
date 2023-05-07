import React from "react";
import Header from "./components/Header";
import GetAllBooks from "./components/GetAllBooks";
import CreateBook from "./components/CreateBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateBook from "./components/UpdateBook";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<GetAllBooks />} />
          <Route path="/create" element={<CreateBook />} />
          <Route path="/update/:id" element={<UpdateBook />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import NavBar from "./components/NavBar";
import AllBlogs from "./components/GetAllBlogs";
import AddBlog from "./components/CreateBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditBlog from "./components/UpdateBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllBlogs />} />
          <Route path="/add" element={<AddBlog />} />
          <Route path="/edit/:id" element={<EditBlog />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

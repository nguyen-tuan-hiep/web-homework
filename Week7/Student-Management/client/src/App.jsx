import React from "react";
import NavBar from "./components/NavBar";
import AllStudents from "./components/GetAllStudents";
import AddStudent from "./components/CreateStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditStudent from "./components/UpdateStudent";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <BrowserRouter>
        <div style={{ flex: 1 }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<AllStudents />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/edit/:id" element={<EditStudent />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

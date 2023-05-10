import React from "react";
import NavBar from "./components/NavBar";
import AllStudents from "./components/GetAllStudents";
import CreateStudent from "./components/CreateStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditStudent from "./components/UpdateStudent";
import Footer from "./components/Footer";
import NotFound from "./components/ErrorPage/NotFound";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <BrowserRouter>
        <div style={{ flex: 1 }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<AllStudents />} />
            <Route path="/create" element={<CreateStudent />} />
            <Route path="/update/:id" element={<EditStudent />} />
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

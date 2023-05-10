import React from "react";
import NavBar from "./components/NavBar";
import AllUsers from "./components/AllUser";
import AddUser from "./components/AddUser";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						path="/all"
						element={<AllUsers />}
					/>
					<Route
						path="/add"
						element={<AddUser />}
					/>
					<Route
						path="/edit/:id"
						element={<EditUser />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

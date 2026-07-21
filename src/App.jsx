import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./crm/Home";

export default function App() {
    return (
        <Routes>
            <Route 
                path="/" element={<Login />} 
            />
            <Route 
                path="/home" 
                element={<Home />} 
            />
        </Routes>
    );
}
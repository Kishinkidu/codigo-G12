import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import SignUp from "../page/SignUp";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}
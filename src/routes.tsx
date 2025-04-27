import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/gallery";
import About from "./pages/about";
import Home from "./pages/home";
import Docs from "./pages/docs";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/docs" element={<Docs />} />

            <Route path="*" element={<Home />} />
        </Routes>
    )
}
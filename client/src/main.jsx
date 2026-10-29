import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forside from "./views/Forside.jsx";
import Elevside from "./views/Elevside.jsx";
import Rubrikkside from "./views/Rubrikkside.jsx";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/elev/:mappe" element={<Elevside />} />
        <Route path="/rubrikk" element={<Rubrikkside />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

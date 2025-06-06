import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Homepage from "./pages/Homepage.jsx";
import Viewpage from "./pages/Viewpage.jsx";
import Page404 from "./pages/Page404.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/view" element={<Viewpage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

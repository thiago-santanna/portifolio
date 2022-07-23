import React from "react";
import ReactDOM from "react-dom/client";
import { HeaderNavBar } from "./components/header";

import { App } from "./App";
import { Footer } from "./components/footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderNavBar />
    <App />
    <Footer />
  </React.StrictMode>
);

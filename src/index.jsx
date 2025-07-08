import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HotAndCold from "./hot_and_cold";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HotAndCold />
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
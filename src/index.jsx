import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MotAfficheMobile from "./mot_affiche_mobile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MotAfficheMobile />
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
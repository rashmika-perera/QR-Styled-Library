import React from "react";
import ReactDOM from "react-dom/client";
import { QRCodeCard, QRCodeAvatarCard, ScannerFrame } from "./index";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef2ff",
        display: "flex",
        gap: 30,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: 30,
      }}
    >
      <QRCodeCard
        value="https://your-portfolio.com"
        title="My Portfolio"
        subtitle="Scan to visit"
      />

      <QRCodeAvatarCard
        value="https://github.com/yourname"
        name="Rashmika"
        role="Software Engineering Student"
        avatarUrl="https://via.placeholder.com/100"
      />

      <ScannerFrame />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
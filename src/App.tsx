import { useState } from "react";
import ModelCanvas from "./components/viewer/ModelCanvas";
import "./App.css";

function App() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">3D Model Viewer</h1>
        <ModelCanvas />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import ModelCanvas from "./components/viewer/ModelCanvas";
import ImageUploader from "./components/upload/ImageUploader";
import "./App.css";

function App() {
  const handleUpload = (image1: string | null, image2: string | null) => {
    console.log("Image 1:", image1);
    console.log("Image 2:", image2);
  };
  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">3D Model Viewer</h1>
        <ModelCanvas />
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Upload & Preview</h1>
        <ImageUploader onUpload={handleUpload} />
      </div>
    </>
  );
}

export default App;

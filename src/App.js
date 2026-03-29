import React from "react";
import images from "./data";
import ImageCard from "./components/ImageCard";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="title">Image Gallery</h1>

      <div className="gallery">
        {images.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </div>
  );
}

export default App;
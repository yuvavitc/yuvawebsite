import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/gallery")
      .then((res) => setImages(res.data.images))
      .catch((err) => console.error("Failed to load gallery", err));
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="overflow-hidden rounded">
            <img src={src} alt={`img-${i}`} className="w-full h-60 object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

exports.getGallery = (req, res) => {
  const imageList = [
    "https://via.placeholder.com/400x300?text=1",
    "https://via.placeholder.com/400x300?text=2",
    "https://via.placeholder.com/400x300?text=3",
  ];
  res.json({ images: imageList });
};

// components/LifeAtGo4Explore.js

import Image from "next/image";

const images = [
  "../assets/img/png/party_img.png",
  "../assets/img/png/party_img.png",
  "../assets/img/png/party_img.png",
  "../assets/img/png/party_img.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
  "/images/image5.png",
  "/images/image6.png",
  "/images/image7.png",
  "/images/image8.png",
];

const Grid = () => {
  const containerStyle = {
    textAlign: "center",
  };

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px",
    padding: "20px",
  };

  const imageWrapperStyle = {
    overflow: "hidden",
    borderRadius: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1>Life at Go4Explore</h1>
      <div style={gridContainerStyle}>
        {images.map((src, index) => (
          <div key={index} style={imageWrapperStyle}>
            <Image
              src={src}
              alt={`Life at Go4Explore ${index + 1}`}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;

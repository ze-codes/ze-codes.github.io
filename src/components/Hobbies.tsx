import React, { useState, useEffect } from "react";

const golfImages = [
  "images/golf/golf1-min.jpg",
  "images/golf/golf2-min.jpg",
  "images/golf/golf3-min.jpg",
  "images/golf/golf4-min.jpg",
  "images/golf/golf5-min.jpg",
  "images/golf/golf6-min.jpg",
  "images/golf/golf7-min.jpg",
  "images/golf/golf8-min.jpg",
  "images/golf/golf9-min.jpg",
  "images/golf/golf10-min.jpg",
  "images/golf/golf11-min.jpg",
  "images/golf/golf12-min.jpg",
  "images/golf/golf13-min.jpg",
  "images/golf/golf14-min.jpg",
];

function Hobbies() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    setIsImageLoading(true);
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === golfImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? golfImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hobbies">
      <section>
        <h3>Golf</h3>
        <p>
          I played competitive golf growing up and still play recreationally.
        </p>
        <ul>
          <li>
            <a href="https://sports.sohu.com/20091028/n267797689.shtml/">
              Winner of 2011 Volvo China Junior Championship
            </a>
          </li>
          <li>
            <a href="https://sports.qq.com/a/20120413/000665.htm">
              Participated in 2012 Volvo China Open (European Tour)
            </a>
          </li>
          <li>Won many junior tournaments in China and Canada</li>
        </ul>

        <div className="carousel">
          <button onClick={prevImage} className="carousel-button prev">
            &#10094;
          </button>

          {isImageLoading && (
            <div className="loading-indicator">Loading...</div>
          )}

          <img
            key={currentImageIndex}
            src={golfImages[currentImageIndex]}
            alt={`Golf ${currentImageIndex + 1}`}
            className="carousel-image"
            onLoad={() => setIsImageLoading(false)}
            onError={() => {
              setIsImageLoading(false);
              console.error(
                "Failed to load image:",
                golfImages[currentImageIndex]
              );
            }}
            style={{ display: isImageLoading ? "none" : "block" }}
          />
          <button onClick={nextImage} className="carousel-button next">
            &#10095;
          </button>
        </div>
      </section>
    </div>
  );
}

export default Hobbies;

import React, { useState } from 'react';

const golfImages = [
  '/images/golf1.jpg',
  '/images/golf2.jpg',
  '/images/golf3.jpg',
  '/images/golf4.jpg',
  '/images/golf5.jpg',
  '/images/golf6.jpg',
  '/images/golf7.jpg',
  '/images/golf8.jpg',
  '/images/golf9.jpg',
  '/images/golf10.jpg',
  '/images/golf11.jpg',
  '/images/golf12.jpg',
  '/images/golf13.jpg',
  '/images/golf14.jpg',
];

function Hobbies() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        <h2>Golf</h2>
        <p>I played competitive golf growing up and still play recreationally.</p>
        <ul>
          <li>
            <a href="https://sports.sohu.com/20091028/n267797689.shtml/">Winner of 2010 Volvo China Junior Championship</a>
          </li>
          <li>
            <a href="https://sports.qq.com/a/20120413/000665.htm">Participated in 2011 Volvo China Open (European Tour)</a>
          </li>
          <li>
            Won many junior tournaments in China and Canada
          </li>
        </ul>
        
        <div className="carousel">
          <button onClick={prevImage} className="carousel-button prev">&#10094;</button>
          <img src={golfImages[currentImageIndex]} alt={`Golf ${currentImageIndex + 1}`} className="carousel-image" />
          <button onClick={nextImage} className="carousel-button next">&#10095;</button>
        </div>
      </section>
    </div>
  );
}

export default Hobbies;
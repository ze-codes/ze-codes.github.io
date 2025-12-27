import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./Hobbies.module.css";

// Dynamically import all golf images
const golfImageModules = import.meta.glob<{ default: string }>(
  "../assets/golf/*.jpg",
  { eager: true }
);

// Extract image URLs and sort numerically
const golfImages = Object.entries(golfImageModules)
  .map(([path, module]) => ({
    path,
    url: module.default,
  }))
  .sort((a, b) => {
    const numA = parseInt(a.path.match(/golf(\d+)/)?.[1] || "0");
    const numB = parseInt(b.path.match(/golf(\d+)/)?.[1] || "0");
    return numA - numB;
  })
  .map((item) => item.url);

function Hobbies() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % golfImages.length);
    }
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === 0 ? golfImages.length - 1 : lightboxIndex - 1
      );
    }
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, goNext, goPrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backLink}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </Link>

      <header className={styles.header}>
        <h1>Golf</h1>
        <p>
          I played competitive golf growing up and still play recreationally.
        </p>
      </header>

      <ul className={styles.achievements}>
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

      <div className={styles.photoGrid}>
        {golfImages.map((src, index) => (
          <button
            key={src}
            className={styles.photoItem}
            onClick={() => openLightbox(index)}
            aria-label={`View golf photo ${index + 1}`}
          >
            <img
              src={src}
              alt={`Golf moment ${index + 1}`}
              className={styles.photo}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ×
          </button>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={golfImages[lightboxIndex]}
              alt={`Golf moment ${lightboxIndex + 1}`}
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxCounter}>
              {lightboxIndex + 1} / {golfImages.length}
            </div>
          </div>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default Hobbies;

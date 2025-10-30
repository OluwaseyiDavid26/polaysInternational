import React, { useState, useEffect } from "react";

// Project images imports
import proj1 from "../assets/Bitmap (1) (3).png";
import wuseHeight1 from "../assets/wuse-height1.jpg";
import proj3 from "../assets/Bitmap (2) (3).png";

// Gallery images imports
import oreBitmap1 from "../assets/Bitmap.png";
import oreBitmap2 from "../assets/Bitmap (1) (2).png";
import oreBitmap3 from "../assets/Bitmap (2) (2).png";
import wuseHeight2 from "../assets/wuse-height2.jpg";
import sampleBitmap1 from "../assets/Bitmap (2) (1).png";
import sampleBitmap2 from "../assets/Bitmap (2) (1).png";

export default function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Gallery data
  const galleries = {
    ore: [
      { src: oreBitmap1, caption: "Ore Terminal 1" },
      { src: oreBitmap2, caption: "Ore Terminal 2" },
      { src: oreBitmap3, caption: "Ore Terminal 3" },
    ],
    wuse: [
      { src: wuseHeight1, caption: "Wuse Heights 1" },
      { src: wuseHeight2, caption: "Wuse Heights 2" },
    ],
    sample: [
      { src: sampleBitmap1, caption: "Sample Project 1" },
      { src: sampleBitmap2, caption: "Sample Project 2" },
    ],
  };

  const openGallery = (galleryName: "ore" | "wuse" | "sample", index = 0) => {
    setCurrentGallery(galleries[galleryName]);
    setCurrentIndex(index);
    setLightboxOpen(true);
    setIsPlaying(false);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setIsPlaying(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + currentGallery.length) % currentGallery.length
    );
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  // Autoplay effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && lightboxOpen) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % currentGallery.length);
      }, 3000); // Change image every 3 seconds
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, lightboxOpen, currentGallery.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
      if (e.key === " ") {
        e.preventDefault();
        toggleAutoplay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      <section id="project" className="relative w-full py-20 bg-white">
        {/* Watermark */}
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[200px] font-bold text-gray-100 opacity-20 pointer-events-none select-none">
          PICL
        </span>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {/* Ore Terminal */}
            <div className="relative overflow-hidden cursor-pointer h-[450px]">
              <img
                src={proj1}
                alt="Ore Terminal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-start justify-start p-8">
                <div className="text-left">
                  <h3 className="text-3xl font-serif text-blue-900 mb-4">
                    Ore Terminal
                  </h3>
                  <span className="bg-red-500 text-white px-6 py-3 font-bold text-2xl">
                    01
                  </span>
                </div>
              </div>
              <div className="absolute top-8 right-8">
                <button
                  onClick={() => openGallery("ore")}
                  className="text-red-500 font-bold text-lg uppercase hover:text-red-600 transition-colors"
                >
                  MORE
                </button>
              </div>
            </div>

            {/* Wuse Heights */}
            <div className="relative overflow-hidden cursor-pointer h-[450px]">
              <img
                src={wuseHeight1}
                alt="Wuse Heights"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-start justify-center p-8">
                <div className="text-center">
                  <h3 className="text-3xl font-serif text-blue-900 mb-4">
                    Wuse Heights
                  </h3>
                  <span className="bg-red-500 text-white px-6 py-3 font-bold text-2xl inline-block">
                    02
                  </span>
                </div>
              </div>
              <div className="absolute top-8 right-8">
                <button
                  onClick={() => openGallery("wuse")}
                  className="text-red-500 font-bold text-lg uppercase hover:text-red-600 transition-colors"
                >
                  MORE
                </button>
              </div>
            </div>

            {/* Sample Projects */}
            <div className="relative overflow-hidden cursor-pointer h-[450px]">
              <img
                src={proj3}
                alt="Sample Projects"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-end p-8">
                <div className="text-right">
                  <h3 className="text-3xl font-serif text-blue-900 mb-4">
                    Sample Projects
                  </h3>
                  <span className="bg-red-500 text-white px-6 py-3 font-bold text-2xl inline-block">
                    03
                  </span>
                </div>
              </div>
              <div className="absolute top-8 right-8">
                <button
                  onClick={() => openGallery("sample")}
                  className="text-red-500 font-bold text-lg uppercase hover:text-red-600 transition-colors"
                >
                  MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-red-500 transition-colors z-50"
          >
            ×
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleAutoplay();
            }}
            className="absolute top-4 left-4 text-white hover:text-red-500 transition-colors z-50 bg-black/50 px-4 py-2 rounded-lg flex items-center gap-2"
          >
            {isPlaying ? (
              <>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play
              </>
            )}
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-red-500 transition-colors z-50"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-red-500 transition-colors z-50"
          >
            ›
          </button>

          {/* Image */}
          <div
            className="max-w-6xl max-h-[90vh] px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentGallery[currentIndex]?.src}
              alt={currentGallery[currentIndex]?.caption}
              className="max-w-full max-h-[80vh] object-contain"
            />
            {/* Caption */}
            <p className="text-white text-center mt-4 text-lg">
              {currentGallery[currentIndex]?.caption}
            </p>
            {/* Counter */}
            <p className="text-white/70 text-center mt-2">
              {currentIndex + 1} / {currentGallery.length}
            </p>
          </div>

          {/* Thumbnails */}
          <div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {currentGallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-16 h-16 overflow-hidden rounded border-2 ${
                  idx === currentIndex ? "border-red-500" : "border-white/50"
                } hover:border-red-500 transition-colors`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

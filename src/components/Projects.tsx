import React, { useState, useEffect } from "react";
import { Play, Pause, X, ChevronLeft, ChevronRight } from "lucide-react";

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

interface GalleryImage {
  src: string;
  caption: string;
}

export default function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<GalleryImage[]>([]);
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
    let interval: ReturnType<typeof setInterval>;
    {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % currentGallery.length);
      }, 3000);
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
  }, [lightboxOpen, currentGallery.length]);

  return (
    <>
      <section id="project" className="relative w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ore Terminal */}
            <div className="relative overflow-hidden group h-[500px] shadow-lg">
              <img
                src={proj1}
                alt="Ore Terminal"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-8 left-8">
                <h3 className="text-4xl font-serif text-blue-900 mb-4 drop-shadow-lg">
                  Ore Terminal
                </h3>
                <span className="bg-red-500 text-white px-6 py-3 font-bold text-2xl inline-block">
                  01
                </span>
              </div>
              <button
                onClick={() => openGallery("ore")}
                className="absolute top-8 right-8 text-red-500 font-bold text-lg uppercase hover:text-white hover:bg-red-500 transition-all duration-300 px-6 py-2 border-2 border-red-500"
              >
                MORE
              </button>
            </div>

            {/* Wuse Heights */}
            <div className="relative overflow-hidden group h-[500px] shadow-lg">
              <img
                src={wuseHeight1}
                alt="Wuse Heights"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
                <h3 className="text-4xl font-serif text-blue-900 mb-4 drop-shadow-lg">
                  Wuse Heights
                </h3>
                <span className="bg-red-500 text-white px-6 py-3 font-bold text-2xl inline-block">
                  02
                </span>
              </div>
              <button
                onClick={() => openGallery("wuse")}
                className="absolute top-8 right-8 text-red-500 font-bold text-lg uppercase hover:text-white hover:bg-red-500 transition-all duration-300 px-6 py-2 border-2 border-red-500"
              >
                MORE
              </button>
            </div>

            {/* Sample Projects */}
            <div className="relative overflow-hidden group h-[500px] shadow-lg">
              <img
                src={proj3}
                alt="Sample Projects"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 right-8 text-right">
                <h3 className="text-4xl font-serif text-blue-900 mb-4 drop-shadow-lg">
                  Sample Projects
                </h3>
                <span className="bg-red-500 text-white px-6 py-3 font-bold text-2xl inline-block">
                  03
                </span>
              </div>
              <button
                onClick={() => openGallery("sample")}
                className="absolute top-8 right-8 text-red-500 font-bold text-lg uppercase hover:text-white hover:bg-red-500 transition-all duration-300 px-6 py-2 border-2 border-red-500"
              >
                MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Top Controls Bar */}
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent p-4 flex justify-between items-center z-50">
            <div className="text-white text-lg font-medium">
              {currentIndex + 1} / {currentGallery.length}
            </div>

            <div className="flex gap-4">
              {/* Play/Pause Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAutoplay();
                }}
                className="text-white hover:text-red-500 transition-colors flex items-center gap-2 bg-white/10 px-4 py-2 rounded"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span className="hidden sm:inline">Play</span>
                  </>
                )}
              </button>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="text-white hover:text-red-500 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500 transition-colors z-50 bg-black/50 p-3 rounded-full"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500 transition-colors z-50 bg-black/50 p-3 rounded-full"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <div
            className="max-w-5xl max-h-[85vh] px-20 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentGallery[currentIndex]?.src}
              alt={currentGallery[currentIndex]?.caption}
              className="max-w-full max-h-[75vh] object-contain shadow-2xl"
            />
            {/* Caption */}
            <p className="text-white text-center mt-6 text-xl font-medium">
              {currentGallery[currentIndex]?.caption}
            </p>
          </div>

          {/* Thumbnails */}
          <div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 bg-black/50 p-3 rounded-lg backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {currentGallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-20 h-20 overflow-hidden rounded transition-all duration-300 ${
                  idx === currentIndex
                    ? "ring-2 ring-red-500 scale-110"
                    : "ring-1 ring-white/30 hover:ring-red-500"
                }`}
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

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  ArrowUp,
  X,
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  Play,
} from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

interface PortfolioLink {
  id: number;
  title: string;
  url: string;
}

const Footer: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const portfolioLinks: PortfolioLink[] = [
    { id: 1, title: "Modern Natural Materials", url: "#" },
    { id: 2, title: "Minimal Smart House", url: "#" },
    { id: 3, title: "Beautiful Wooden Stairs", url: "#" },
    { id: 4, title: "Escalators Construction", url: "#" },
    { id: 5, title: "Abstract Architecture", url: "#" },
    { id: 6, title: "Design Your Space", url: "#" },
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      alt: "Project 1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
      alt: "Project 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      alt: "Project 3",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
      alt: "Project 4",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=800&fit=crop",
      alt: "Project 5",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
      alt: "Project 6",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&h=800&fit=crop",
      alt: "Project 7",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      alt: "Project 8",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&h=800&fit=crop",
      alt: "Project 9",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImageIndex(null);
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 relative">
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute -top-8 right-0 bg-red-500 hover:bg-red-600 text-white w-16 h-16 shadow-lg transition-all duration-300 transform hover:scale-105 z-10 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-white mb-2">POLAYS</h2>
                <p className="text-xs text-gray-400 tracking-wider">
                  INTERNATIONAL
                </p>
                <p className="text-xs text-gray-400 tracking-wider">
                  CONCEPT LIMITED
                </p>
              </div>
              <p className="text-sm mb-6 leading-relaxed text-gray-400">
                Polays International Concept Limited, Make your dreams come True
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contacts */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 uppercase tracking-wide">
                Contacts
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-sm leading-relaxed">
                    17, A7 street, Citec Estate, Mbora District, Abuja
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <a
                    href="tel:+2348099732070"
                    className="text-sm hover:text-red-500 transition-colors"
                  >
                    +(234) 80 9973 2070
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <a
                    href="mailto:admin@polays.org"
                    className="text-sm hover:text-red-500 transition-colors"
                  >
                    Admin@polays.org
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Portfolio */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 uppercase tracking-wide">
                Our Portfolio
              </h3>
              <ul className="space-y-3">
                {portfolioLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      className="text-sm text-gray-400 hover:text-red-500 transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Gallery */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 uppercase tracking-wide">
                Our Gallery
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => openLightbox(index)}
                    className="relative overflow-hidden group cursor-pointer aspect-square bg-gray-800"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Lightbox Modal */}
        {isLightboxOpen && selectedImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent p-4 flex justify-between items-center z-10">
              <div className="text-white text-sm font-medium">
                {selectedImageIndex + 1} / {galleryImages.length}
              </div>
              <div className="flex gap-4">
                <button
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Grid view"
                >
                  <Grid3x3 className="w-6 h-6" />
                </button>
                <button
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Slideshow"
                >
                  <Play className="w-6 h-6" />
                </button>
                <button
                  onClick={closeLightbox}
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative max-w-7xl max-h-screen w-full h-full flex items-center justify-center p-20">
              <img
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].alt}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex gap-2 justify-center overflow-x-auto">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(index);
                    }}
                    className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden transition-all duration-200 ${
                      index === selectedImageIndex
                        ? "ring-2 ring-red-500 opacity-100"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </footer>

      {/* Copyright Bar */}
      <div className="bg-gray-950 text-gray-400 py-6">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              Copyright © 2025{" "}
              <a
                href="/"
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                Polays
              </a>
              . All Rights Reserved
            </p>
            <ul className="flex gap-6 text-sm">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Privacy Environmental Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

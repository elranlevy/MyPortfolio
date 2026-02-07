import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import imgPhone1 from "figma:asset/13ed8f2acf7fd27b7419c1459a6b7ceb54f9dfd9.png";
import imgPhone2 from "figma:asset/342d8125ea1cc1615825ea5470135f059c4a2c59.png";
import imgPhone3 from "figma:asset/e81709e161a01df5c32993f46e70ab248cd060f0.png";
import imgPhone4 from "figma:asset/65994e14a0da5f8be92d6c7d726ea0169e0060af.png";
import imgPhone5 from "figma:asset/d9e3bc3ef446b20f8a8f60bafc28e5ed560d94e2.png";
import imgPhone6 from "figma:asset/db0884acae3a34e3a53aecd81e4fcee2487d00d2.png";

export function BitPhoneSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const phoneImages = [
    { src: imgPhone1, alt: "Bit app home screen" },
    { src: imgPhone2, alt: "Bit app contact selection" },
    { src: imgPhone3, alt: "Bit app amount entry" },
    { src: imgPhone4, alt: "Bit app payment reason" },
    { src: imgPhone5, alt: "Bit app password entry" },
    { src: imgPhone6, alt: "Bit app confirmation screen" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? phoneImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === phoneImages.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section 
      className="mb-16 md:mb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Desktop: 2 images at a time */}
      <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 px-4 relative">
        <button
          onClick={handlePrev}
          className="absolute left-4 lg:left-8 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Previous images"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="flex gap-8 lg:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[phoneImages[currentIndex], phoneImages[(currentIndex + 1) % phoneImages.length]].map((image, idx) => (
              <div
                key={currentIndex + idx}
                className="w-[280px] lg:w-[320px] h-[500px] lg:h-[560px]"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handleNext}
          className="absolute right-4 lg:right-8 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Next images"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Mobile: 1 image at a time with dots */}
      <div className="md:hidden relative flex flex-col items-center gap-6 px-4 py-8">
        <div className="relative flex items-center justify-center w-full">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="w-[280px] h-[500px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={phoneImages[currentIndex].src} 
                alt={phoneImages[currentIndex].alt} 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handleNext}
            className="absolute right-0 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex gap-2">
          {phoneImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-black w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
import React from 'react'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = ["/carousel3.jpg", "/carousel2.jpg", "/carousel1.jpg"];

const Carousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const rotations = [4, -6, -2];
  const zIndexes = [1, 2, 3];
  return (
    <div
      className="carousel-stack"
      ref={ref}
    >
      {images.map((src, index) => {
        return (
          <motion.img
            key={index}
            src={src}
            alt={`Stacked ${index}`}
            className="carousel-img"
            initial={{ rotate: 0, opacity: 0, y: 100 }}
            whileHover={{ scale: 1.05 }}
            style={{ zIndex: zIndexes[index] }}
            animate={
              isInView
                ? {
                    rotate: rotations[index],
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.15 },
                  }
                : {}
            }
          />
        );
      })}
    </div>
  );
};

export default Carousel
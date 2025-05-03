import React from 'react'
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Carousel = () => {
  const [imageOrder, setImageOrder] = useState([
    "/carousel3.jpg",
    "/carousel2.jpg",
    "/carousel1.jpg",
  ]);

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const rotations = [4, -6, -2];
  const zIndexes = [1, 2, 3];

  const rotateStack = () => {
    setImageOrder((prev) => [prev[1], prev[2], prev[0]]);
  };
  return (
    <div
      className="carousel-stack"
      ref={ref}
    >
      {imageOrder.map((src, index) => {
        return (
          <motion.img
            key={index}
            src={src}
            alt={`Stacked ${index}`}
            className="carousel-img"
            initial={{ rotate: 0, opacity: 0, y: 100 }}
            animate={
              isInView
                ? {
                    rotate: rotations[index],
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.1,
                    },
                  }
                : {}
            }
            whileHover={index === 2 ? { scale: 1.05 } : {}}
            whileTap={index === 2 ? { scale: 0.95 } : {}}
            onClick={index === 2 ? rotateStack : undefined}
            style={{
              zIndex: zIndexes[index],
              position: "absolute",
              cursor: index === 2 ? "pointer" : "default",
            }}
          />
        );
      })}
    </div>
  );
};

export default Carousel
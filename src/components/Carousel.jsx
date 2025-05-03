import React from 'react'
import { motion } from "framer-motion";

const images = ["/carousel3.jpg", "/carousel2.jpg", "/carousel1.jpg"];

const Carousel = () => {
	 return (
     <div className="carousel-stack">
       {images.map((src, index) => {
         const rotations = [4, -6, -2];
         const zIndexes = [1, 2, 3];

         return (
           <motion.img
             key={index}
             src={src}
             alt={`Stacked ${index}`}
             className="carousel-img"
             initial={{ rotate: rotations[index], scale: 1 }}
             whileHover={{ scale: 1.05 }}
             style={{ zIndex: zIndexes[index] }}
           />
         );
       })}
     </div>
   );
}

export default Carousel
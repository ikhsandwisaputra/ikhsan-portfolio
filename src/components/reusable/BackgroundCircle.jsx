import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 2, 1],
        opacity: [0.1, 0.2, 0.3, 0.5, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 10 }} 
      className="relative flex justify-center items-center"
    >
      <Circle size={200} delay={0} />
      <Circle size={300} delay={2} />
      <Circle size={500} delay={4} />
      <PulsatingCircle size={510} />
      <Circle size={800} delay={6} />
    </motion.div>
  );
};

const Circle = ({ size, delay }) => {
  return (
    <motion.div
      style={{
        border: "2px solid gray",
        opacity: 0.2,
        borderRadius: "50%",
      }}
      className={`absolute animate-ping h-[${size}px] w-[${size}px] mt-64 md:mt:52`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 6, delay }} 
    />
  );
};

const PulsatingCircle = ({ size }) => {
  return (
    <motion.div
      style={{
        border: "2px solid darkGreen",
        opacity: 0.2,
        borderRadius: "50%",
      }}
      className="absolute animate-pulse mt-64 md:mt:52 rounded-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 8 }} 
    />
  );
};

export default BackgroundCircles;

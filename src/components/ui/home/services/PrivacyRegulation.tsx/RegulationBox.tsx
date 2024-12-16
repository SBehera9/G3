import React from 'react';
import { motion } from 'framer-motion';

interface RegulationBoxProps {
  title: string;
}

const RegulationBox: React.FC<RegulationBoxProps> = ({ title }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }, 
  };

  return (
    <motion.div
      className="group relative bg-teal-100 text-teal-900 border-l-4 border-teal-500 p-4 rounded-lg shadow-sm overflow-hidden"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
    >
      
      <motion.span
        className="absolute inset-0 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"
      />

      
      <motion.p
        className="font-medium relative z-10 group-hover:text-white transition-colors duration-500"
      >
        {title}
      </motion.p>
    </motion.div>
  );
};

export default RegulationBox;

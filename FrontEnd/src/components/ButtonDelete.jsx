import { motion } from "framer-motion";

const ButtonDelete = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, rotate: -2 }}
      className="px-4 py-2 rounded-lg text-white font-medium transition-all shadow-md bg-red-500 hover:bg-red-400"
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default ButtonDelete;

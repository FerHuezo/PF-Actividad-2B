import { motion } from "framer-motion";

const Button = ({ text, onClick, color = "blue" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-4 py-2 rounded-lg text-white font-medium transition-all shadow-md bg-${color}-500 hover:bg-${color}-400`}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;

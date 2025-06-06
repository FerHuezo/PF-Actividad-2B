import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-600 px-4"
    >
      <motion.div
        className="w-full max-w-4xl bg-white bg-opacity-80 rounded-lg shadow-xl px-6 py-10 sm:px-8 sm:py-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-lg"
        >
          ¡Bienvenido a la plataforma de cursos! 🚀
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-800 text-base sm:text-lg mt-6 mb-8"
        >
          Explora los cursos disponibles y mejora tus habilidades. Accede a contenidos de calidad y lleva tu conocimiento al siguiente nivel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 sm:mt-8"
        >
          <Link to="/Dashboard">
            <button className="bg-blue-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-xl hover:bg-blue-400 transition-transform transform hover:scale-105">
              Ver Cursos
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;

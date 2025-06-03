import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-gray-900"
      >
        ¡Bienvenido a la plataforma de cursos! 🚀
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-gray-600 mt-4"
      >
        Explora los cursos disponibles y mejora tus habilidades.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-6"
      >
        <Link to="/Dashboard"> 
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition-colors">
            Ver Cursos
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;

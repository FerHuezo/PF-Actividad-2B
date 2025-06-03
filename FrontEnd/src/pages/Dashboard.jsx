import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Titulo from "../components/Titulos.jsx";
import UserTable from "../components/UserTable";
import Modal from "../components/Modal"; // Nuevo componente

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Titulo titulo="Gestión de Usuarios" />
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-6"
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-2xl font-bold text-white bg-green-500 py-3 rounded-lg text-center hover:bg-green-400 transition-colors block shadow-lg"
        >
          Agregar usuario
        </button>
      </motion.div>

      <UserTable users={[]} />

      {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
    </motion.div>
  );
};

export default Home;

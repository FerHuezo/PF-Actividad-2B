import { motion } from "framer-motion";

const Modal = ({ closeModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full"
      >
        <h2 className="text-xl font-bold mb-4">Agregar Usuario</h2>
        <form>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border rounded px-3 py-2 mb-2"
          />
          <input
            type="email"
            placeholder="Correo"
            className="w-full border rounded px-3 py-2 mb-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition-colors w-full"
          >
            Guardar
          </button>
        </form>
        <button
          onClick={closeModal}
          className="mt-4 text-red-500 hover:underline"
        >
          Cancelar
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
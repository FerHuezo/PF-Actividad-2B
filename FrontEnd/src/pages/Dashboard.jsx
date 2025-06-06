import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import Titulo from "../components/Titulos.jsx";
import UserTable from "../components/UserTable";
import useDataCourses from "../hooks/Courses/useDataCourses";
import UserFormModal from "../components/Modal.jsx";
import ButtonDelete from "../components/ButtonDelete.jsx";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const navigate = useNavigate();

  const { dataCourses, createCourse, updateCourse, deleteCourse } = useDataCourses();

  const handleAdd = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este usuario?")) {
      deleteCourse(id);
    }
  };

  const handleSubmit = (formData) => {
    if (editingUser) {
      updateCourse(editingUser.id, formData);
    } else {
      createCourse(formData);
    }
  };

  const handleLogout = () => {
    // Aquí puedes manejar cualquier lógica adicional antes de redirigir
    navigate(-1); // Redirige al usuario a la ruta anterior
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <Titulo titulo="Gestión de Usuarios" />

      <div className="mb-6">
        <button
          onClick={handleAdd}
          className="text-xl font-bold text-white bg-green-600 px-6 py-3 rounded-lg hover:bg-green-500 transition-colors shadow-lg"
        >
          + Agregar usuario
        </button>
      </div>

      <UserTable
        users={dataCourses}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {isModalOpen && (
        <UserFormModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          defaultValues={editingUser}
          isEditing={!!editingUser}
        />
      )}

      <div className="mt-8">
        <ButtonDelete text="Cerrar Sesión" onClick={handleLogout}/>
      </div>
    </motion.div>
  );
};

export default Home;

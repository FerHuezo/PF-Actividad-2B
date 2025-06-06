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
    navigate(-1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
    >
      <Titulo titulo="Gestión de Usuarios" />

      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-6 gap-4">
        <button
          onClick={handleAdd}
          className="text-base sm:text-lg font-semibold text-white bg-green-600 px-5 py-3 rounded-md hover:bg-green-500 transition-colors shadow-md"
        >
          + Agregar usuario
        </button>
      </div>

      <div className="overflow-x-auto">
        <UserTable
          users={dataCourses}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {isModalOpen && (
        <UserFormModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          defaultValues={editingUser}
          isEditing={!!editingUser}
        />
      )}

      <div className="mt-8">
        <ButtonDelete text="Cerrar Sesión" onClick={handleLogout} />
      </div>
    </motion.div>
  );
};

export default Home;
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const UserFormModal = ({ onClose, onSubmit, defaultValues = {}, isEditing }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const submitForm = (data) => {
    onSubmit(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {isEditing ? "Editar Usuario" : "Agregar Usuario"}
        </h2>

        <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
          <input
            {...register("curso")}
            placeholder="Nombre del Curso"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            {...register("tematica")}
            placeholder="Temática"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            {...register("instructor")}
            placeholder="Instructor"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            {...register("descripcion")}
            placeholder="Descripción"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition"
            >
              {isEditing ? "Actualizar" : "Agregar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormModal;
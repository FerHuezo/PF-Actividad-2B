import { motion } from "framer-motion";
import Button from "./Button";
import ButtonDelete from "./ButtonDelete";

const UserRow = ({ user, onEdit, onDelete }) => {
  return (
    <motion.tr
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b hover:bg-gray-50 transition-colors"
    >
      <td className="px-4 py-2 font-medium">{user.curso}</td>
      <td className="px-4 py-2">{user.tematica}</td>
      <td className="px-4 py-2">{user.instructor}</td>

      <td className="px-4 py-2 max-w-xs">
        <div className="line-clamp-3 overflow-x-auto whitespace-nowrap">
          {user.descripcion}
        </div>
      </td>

      <td className="px-4 py-2 flex gap-2">
        <Button text="Editar" onClick={() => onEdit(user)} />
        <ButtonDelete text="Eliminar" onClick={() => onDelete(user.id)} />
      </td>
    </motion.tr>
  );
};

export default UserRow;
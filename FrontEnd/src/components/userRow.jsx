import { motion } from "framer-motion";
import Button from "./Button";
import ButtonDelete from "./ButtonDelete";

const CourseRow = ({ course }) => {
  return (
    <motion.tr
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b hover:bg-gray-50 transition-colors"
    >
      <td className="px-4 py-2 font-medium">{course.curso}</td>
      <td className="px-4 py-2 text-gray-600">{course.tematica}</td>
      <td className="px-4 py-2">{course.instructor}</td>
      <td className="px-4 py-2">{course.descripcion}</td>
      <td className="px-4 py-2 flex gap-2">
        <Button text="Editar" onClick={() => console.log("Editar", course.curso)} />
        <ButtonDelete text="Eliminar" onClick={() => console.log("Eliminar", course.curso)} />
      </td>
    </motion.tr>
  );
};

export default CourseRow;
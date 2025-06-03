import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useDataCourses = () => {
  const [dataCourses, setDataCourses] = useState([]);

  const getCourses = async () => {
    try {
      const response = await fetch("https://retoolapi.dev/6QbyzP/cursos-online");
      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }
      const data = await response.json();
      setDataCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("Error fetching courses");
    }
  };

  const getCourseById = async (id) => {
    try {
      const response = await fetch(`https://retoolapi.dev/6QbyzP/cursos-online/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch course");
      }
      const data = await response.json();
      return { data, error: null };
    } catch (error) {
      console.error("Error fetching course:", error);
      return { data: null, error: "Failed to fetch course" };
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return {
    dataCourses,
    setDataCourses,
    getCourses,
    getCourseById,
  };
};

export default useDataCourses;
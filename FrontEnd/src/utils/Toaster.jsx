import { toast } from "react-hot-toast";

export const showSuccess = (message) => {
  toast.success(message, {
    icon: "✅",
    style: {
      borderRadius: "10px",
      background: "#d1fae5", // verde claro
      color: "#065f46",
    },
  });
};

export const showError = (message) => {
  toast.error(message, {
    icon: "❌",
    style: {
      borderRadius: "10px",
      background: "#fee2e2", // rojo claro
      color: "#991b1b",
    },
  });
};

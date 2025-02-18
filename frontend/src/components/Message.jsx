const Message = ({ variant = "info", children }) => {
  const getVariantClass = () => {
    switch (variant) {
      case "success":
        return "bg-green-100 text-green-800";
      case "error":
      case "danger": // Support both "error" and "danger"
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800"; // Default info message
    }
  };

  return <div className={`p-4 rounded ${getVariantClass()}`}>{children}</div>;
};

export default Message;

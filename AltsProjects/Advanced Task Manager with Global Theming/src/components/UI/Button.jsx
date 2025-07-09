export default function Button({ variation, children, ...props }) {
  let buttonClasses = "px-2 py-1 rounded";

  switch (variation) {
    case "add": {
      buttonClasses += " bg-red-500 border-red-500 hover:bg-red-300 text-white";
      break;
    }
    case "cancel": {
      buttonClasses += " bg-green-500 border-green-500 hover:bg-green-300 text-white";
      break;
    }

    default: {
      buttonClasses += " bg-red-500 border-red-500 hover:bg-red-300 text-white";
    }
  }

  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
}

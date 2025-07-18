export default function Button({ children, ...props }) {
  return (
    <button {...props} className="p-1 rounded-full cursor-pointer">
      {children}
    </button>
  );
}

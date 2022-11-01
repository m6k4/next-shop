
type Props = {
  type: string;
  children: React.ReactNode;
}
const Button = ({ type, children }) => {
  return (
    <button type={type}
      className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded w-full"
    >
      {children}
    </button>
  );
}

export default Button;
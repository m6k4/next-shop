
type Props = {
  type: string;
  inputRef: React.RefObject<HTMLInputElement>;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, inputRef, required, onChange }: Props) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      required={required}
      type={type}
      ref={inputRef}
      onChange={onChange}
    />
  );
}

export default Input;
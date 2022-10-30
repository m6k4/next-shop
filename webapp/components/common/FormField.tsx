

type FormFieldProps = {
  label: string,
  children: React.ReactNode
  error?: string
}
const FormField = ( {label, children, error}: FormFieldProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
}

export default FormField;
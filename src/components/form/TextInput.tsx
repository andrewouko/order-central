import { TextInputProps } from "@/types";

const TextInput = ({
  name,
  label_className,
  label,
  type,
  placeholder,
  required,
  input_className,
  parent_div_className
}: TextInputProps) => (
  <div className={parent_div_className}>
    <label
      htmlFor={name}
      className={label_className}
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      className={input_className}
      required={required}
      { ...( placeholder && { placeholder } ) }
    />
  </div>
);

export default TextInput;

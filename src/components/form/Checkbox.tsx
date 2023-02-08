import { CheckboxProps } from "@/types";

const Checkbox = ({
  name,
  label_className,
  label,
  type,
  required,
  input_className,
  parent_div_className,
  input_div_className,
  label_div_className,
}: CheckboxProps) => (
  <div className={parent_div_className}>
    <div className={input_div_className}>
      <input
        id={name}
        aria-describedby={name}
        type={type}
        className={input_className}
        required={required}
      />
    </div>
    <div className={label_div_className}>
      <label htmlFor={name} className={label_className}>
        {label}
      </label>
    </div>
  </div>
);

export default Checkbox;

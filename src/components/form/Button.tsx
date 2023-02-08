import { ButtonProps } from "@/types";

const Button = ({ Icon, label }: ButtonProps) => (
  <button
    type="button"
    className="px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-indigo-600 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out w-full inline-flex items-center place-content-center space-x-4"
  >
    <Icon className="mr-2" />
    {label}
  </button>
);
export default Button;

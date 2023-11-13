import { twMerge } from "tailwind-merge";

const Input: React.FC<{
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  id: string;
}> = ({ handleChange, value, className, id, placeholder = "" }) => {
  return (
    <input
      id={id}
      value={value}
      onChange={(e) => handleChange(e)}
      className={twMerge(
        "flex items-center bg-neutral-200 w-1/2 px-2 py-1 text-lg text-neutral-900 mb-4 rounded-lg focus:outline-none placeholder:text-neutral-600",
        className
      )}
      placeholder={placeholder}
    />
  );
};

export default Input;

import { ChangeEventHandler } from "react";

interface SelectProps {
  id: string;
  name: string;
  options: option[] | undefined;
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
  className?: string;
  label?: string;
  disabled?: boolean;
}
export interface option {
  value: string;
  label: string;
}

const Select = ({
  id,
  name,
  options,
  onChange,
  className,
  label,
  disabled
}: SelectProps) => {
  const handleDisabled =
    !!(options && options.length) && !disabled ? false : true;

  console.log(name, "handleDisabled", handleDisabled, "options", options);

  return (
    <div className={className ?? ""}>
      {label && <label htmlFor="">{label}</label>}
      <select name={name} id={id} onChange={onChange} disabled={handleDisabled}>
        <option value="">Empty {name}</option>
        {options &&
          options.map((option: option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Select;

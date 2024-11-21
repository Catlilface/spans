import { EyeIcon, EyeSlashIcon } from "assets/icons";
import InputProps from "./types";
import { useState } from "react";

const Input = ({ label, password, ...props }: InputProps) => {
  const { type, value } = props;
  const [fieldType, setFieldType] = useState(type || "text");

  return (
    <label className="text-black-press b3">
      <div className="text-black-press b3">{label}</div>
      <div className="w-full bg-very-light-blue rounded-3xl flex justify-between transition-colors">
        <input
          className="w-full bg-transparent py-3 px-4 b3 focus-visible:outline-none"
          type={fieldType}
          value={value}
          {...props}
        />
        {password && (
          <Eye
            show={fieldType !== "password"}
            onClick={() =>
              setFieldType(fieldType === "password" ? "text" : "password")
            }
          />
        )}
      </div>
    </label>
  );
};

const Eye = ({ show, onClick }: { show: boolean; onClick: () => void }) => {
  if (show) {
    return (
      <button className="py-3 px-4" onClick={onClick}>
        <EyeSlashIcon />
      </button>
    );
  }

  return (
    <button className="py-3 px-4" onClick={onClick}>
      <EyeIcon />
    </button>
  );
};

export default Input;

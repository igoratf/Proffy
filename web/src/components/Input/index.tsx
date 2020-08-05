import React, { InputHTMLAttributes} from "react";

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({label, name, ...otherProps}) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input id={name} {...otherProps} />
    </div>
  );
}

export default Input;

import React, { TextareaHTMLAttributes} from "react";

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({label, name, ...otherProps}) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...otherProps} />
    </div>
  );
}

export default Textarea;

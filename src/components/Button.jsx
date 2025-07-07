import React from "react";

const Button = ({ text, className }) => {
  return (
    <div>
      <a
        href="https://wa.me/5567996016390?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
        target="_blank"
        rel="noopener noreferrer"
        className={` ${className}`}
        data-gtm="botao-whatsapp"
        >
        {text}
      </a> 
    </div>
  );
};

export default Button;

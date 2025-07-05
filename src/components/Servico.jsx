import React from "react";

const Servico = ({ title, descricao, imagem, alt }) => {
  return (
    <div className="flex flex-col items-center bg-[#fde6cd] w-64 px-5 py-6 rounded-xl shadow-lg border-t-4 border-[#b18061] hover:scale-105 transition-transform duration-300 mt-5 mb-5">
      
      <div className="bg-[#fbfbfbbb] rounded-full p-3 mb-4">
        <img
          src={imagem}
          alt={alt || title}
          className="h-[100px] w-[100px] object-contain"
        />
      </div>

     
      <h3 className="text-amber-800 text-lg font-semibold mb-2 text-center">
        {title}
      </h3>

     
      <p className="text-[#814d2d] text-sm text-center leading-relaxed">
        {descricao}
      </p>
    </div>
  );
};

export default Servico;

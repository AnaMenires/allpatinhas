import { PawPrintIcon } from "@phosphor-icons/react";
import categoria_gato from "../assets/categoria_gato.png";
import categoria_cachorro from "../assets/categoria_cachorro.png";
import categoria_passaro from "../assets/categoria_passaro.png";
import React from "react";

const CategoriaAnimais = () => {
  return (
    <div className="px-4 py-8">
     
      <div className="flex flex-col items-center gap-4 text-center">
        <PawPrintIcon size={42} className="text-[#64a654]" />
        <h1 className="text-[#64a654] font-bold text-2xl md:text-3xl lg:text-4xl max-w-[90%] leading-snug">
          Nossos Pacientes de Patas, Asas e Bigodes
        </h1>
      </div>

      
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 max-w-3xl mx-auto">
       
        <div className="flex flex-col items-center gap-2">
          <img
            src={categoria_gato}
            alt="Gatinho"
            className="h-[120px] w-[120px] rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />
          <h2 className="font-semibold text-[#b18061] text-lg">Gatos</h2>
        </div>

        
        <div className="flex flex-col items-center gap-2">
          <img
            src={categoria_cachorro}
            alt="Cachorro"
            className="h-[120px] w-[120px] rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />
          <h2 className="font-semibold text-[#b18061] text-lg">Cachorros</h2>
        </div>

        
        <div className="flex flex-col items-center gap-2">
          <img
            src={categoria_passaro}
            alt="Pássaros"
            className="h-[120px] w-[120px] rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />
          <h2 className="font-semibold text-[#b18061] text-lg">Pássaros</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoriaAnimais;

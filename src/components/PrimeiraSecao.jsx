import React, { useEffect, useRef, useState } from "react";
import Allpatinhas_logo from "../assets/logo_allpatinhas.png";
import dra_mariane_vet from "../assets/dra_mariane_vet.png";
import { MapPinAreaIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import Button from "./Button";
import BotaoFlutuante from "./BotaoFlutuante";

const PrimeiraSecao = () => {
  const [menuAberto, setMenuAberto] = React.useState(false);
  const imgRef = useRef(null);
  const [imgVisivel, setImgVisivel] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const top = imgRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        setImgVisivel(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full py-3 px-6 flex flex-col bg-gradient-to-b from-cyan-300 to-[#d9f0fa] ">
      <BotaoFlutuante />
      <div className="relative w-full flex items-center justify-between h-20 mb-4 z-30">
        <div className="flex items-center z-30">
          <img
            src={Allpatinhas_logo}
            alt="Logo Allpatinhas"
            className="h-[90px] w-auto"
          />
        </div>

        <div className="md:hidden z-30">
          <button onClick={() => setMenuAberto(!menuAberto)}>
            {menuAberto ? (
              <XIcon size={32} className="text-[#065f46]" />
            ) : (
              <ListIcon size={32} className="text-[#065f46]" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 text-[#065f46] font-medium absolute left-1/2 transform -translate-x-1/2 ">
          <li className="hover:cursor-pointer hover:text-green-700 transition">
            <a href="#servicos" className="block">
              Serviços
            </a>
          </li>
          <li className="hover:cursor-pointer hover:text-green-700 transition">
            <a href="#sobre" className="block">
              Sobre mim
            </a>
          </li>
          <li className="hover:cursor-pointer hover:text-green-700 transition">
            <a href="#contato" className="block">
              Contato
            </a>
          </li>
        </ul>

        <div className="hidden md:block">
          <Button
            className="text-sm border border-[#64a654] text-[#065f46] font-semibold py-1.5 px-4 rounded-full shadow-sm hover:bg-[#64a654]/10 hover:scale-105 transition"
            text="Agendar Consulta"
          />
        </div>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-20 transition-transform duration-300 ease-in-out ${
          menuAberto ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center pt-24 gap-6 text-[#065f46] font-medium">
          <a href="#servicos" onClick={() => setMenuAberto(false)}>
            Serviços
          </a>
          <a href="#sobre" onClick={() => setMenuAberto(false)}>
            Sobre mim
          </a>
          <a href="#contato" onClick={() => setMenuAberto(false)}>
            Contato
          </a>
          <Button
            className="bg-[#64a654] text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-[#518a44] transition"
            text="Agendar Consulta"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-8 md:flex-row md:text-left md:gap-16">
        <div className="max-w-md">
          <h1 className="text-[#065f46] font-bold text-3xl mb-2">
            Atendimento Veterinário à Domicílio
          </h1>
          <h2 className="text-lg text-[#065f46] font-light mb-2">
            Evite deslocamentos, trânsito e estresse
          </h2>
          <div className="flex justify-center md:justify-start items-center gap-2">
            <h3 className="text-base text-[#065f46] font-medium">
              Campo Grande e região
            </h3>
            <MapPinAreaIcon size={24} className="text-[#64a654]" />
          </div>
          <Button
            className="inline-block bg-[#64a654] text-white font-semibold py-2 px-4 rounded-full mt-5 shadow-md hover:bg-[#518a44] hover:scale-105 transition-transform duration-300"
            text=" Falar com a Veterinária 🐾 "
          />
        </div>

        <div className="flex justify-center">
          <img
            ref={imgRef}
            src={dra_mariane_vet}
            alt="Doutora Mariane"
            className={`h-[300px] w-auto transition-opacity duration-1000 ease-in-out ${
              imgVisivel ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default PrimeiraSecao;

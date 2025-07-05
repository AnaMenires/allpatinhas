import React from "react";
import veterinaria_mariane from "../assets/veterinaria_mariane.png";
import Button from "./Button";

const QuemSouEu = () => {
  return (
    <section id="sobre" className="bg-[#fff8f1] py-14 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="w-full md:w-[55%] text-justify md:text-left md:pl-10">
          <h2 className="text-2xl md:text-3xl text-amber-800 font-bold mb-6">
            Quem sou eu
          </h2>

          <p className="text-base md:text-sm text-[#814d2d] leading-7 md:leading-6 mb-8">
            Olá! Sou <strong>Mariane M. Mello</strong>, Médica Veterinária e
            pós-graduanda em Clínica Médica e Cirúrgica de Pequenos Animais.
            Tenho formação complementar em emergências e uma paixão verdadeira
            por cuidar com atenção e responsabilidade de cada paciente.
            <br />
            <br />
            Ao lado do meu esposo, <strong>Eduardo S. Dias</strong>, auxiliar
            veterinário, oferecemos um atendimento domiciliar personalizado, com
            foco no conforto, bem-estar e praticidade para você e seu pet.
            <br />
            <br />
            Realizamos <strong>consultas, exames, vacinação e Pet Sitter</strong> com
            empatia e compromisso com a saúde do seu animal — no ambiente em que
            ele se sente mais seguro: a sua casa.
            <br />
            <br />
            Nosso propósito é simples: oferecer um cuidado completo, humano e de
            qualidade.
          </p>

          <div className="flex justify-center md:justify-start">
            <Button
              className="bg-[#64a654] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#518a44] transition"
              text="Fale Comigo"
            />
          </div>
        </div>

       
        <div className="w-full md:w-[45%] flex justify-center">
          <img
            src={veterinaria_mariane}
            alt="Foto da Veterinária"
            className="rounded-xl shadow-md h-[300px] w-auto object-contain transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default QuemSouEu;

import React from "react";

const BotaoFlutuante = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5567996016390&text=Ol%C3%A1%2C+vim+do+seu+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#64a654] text-white font-medium py-2 px-5 rounded-full shadow-lg hover:bg-[#518a44] hover:scale-105 transition-transform duration-300 z-50 flex items-center gap-2">
     Iniciar Conversa
    </a>
  );
};

export default BotaoFlutuante;

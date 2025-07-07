import React from "react";
import Allpatinhas_logo from "../assets/Allpatinhas_logo.png";
import {
  CalendarCheckIcon,
  ClockIcon,
  InstagramLogoIcon,
  MapPinAreaIcon,
  MapPinSimpleIcon,
  PhoneCallIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#d9f0fa] py-10 pt-5">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-around items-center md:items-start gap-10 px-4 text-center md:text-left">
        
        <div>
          <img
            src={Allpatinhas_logo}
            alt="Logo Allpatinhas"
            className="h-[150px] w-[150px] mx-auto md:mx-0"
          />
        </div>

        
        <div>
          <h2 className="text-[#457d4c] font-semibold mb-2 flex justify-center md:justify-start items-center gap-2">
            Locais que Atendo
            <MapPinAreaIcon size={20} className="text-[#64a654]" />
          </h2>
          <ul className="text-sm text-[#457d4c] flex flex-col gap-2 items-center md:items-start">
            {["Campo Grande-MS", "Jaraguari-MS", "Fazendas", "Rochedinho", "Terenos"].map((local) => (
              <li key={local} className="flex gap-1 items-center">
                <MapPinSimpleIcon size={20} className="text-[#64a654]" />
                {local}
              </li>
            ))}
          </ul>
        </div>

       
        <div>
          <h2 className="text-[#457d4c] font-semibold mb-2 flex justify-center md:justify-start items-center gap-2">
            Horários
            <ClockIcon size={20} className="text-[#64a654]" />
          </h2>
          <ul className="flex flex-col gap-2 text-sm text-[#457d4c] items-center md:items-start">
            <li className="flex gap-1 items-center">
              <CalendarCheckIcon size={20} className="text-[#64a654]" />
              Segunda a Sexta:
            </li>
            <li className="flex gap-1 items-center">
              <ClockIcon size={20} className="text-[#64a654]" />
              07:30 às 20:00
            </li>
            <li className="flex gap-1 items-center">
              <CalendarCheckIcon size={20} className="text-[#64a654]" />
              Sábado e Domingo:
            </li>
            <li className="flex gap-1 items-center">
              <ClockIcon size={20} className="text-[#64a654]" />
              Agendamento 07:30 às 20:00
            </li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-[#457d4c] font-semibold mb-2">Contato</h2>
          <ul className="flex flex-col gap-2 text-sm text-[#457d4c] items-center md:items-start">
            <li>
              <a
                href="https://www.instagram.com/vet.allpatinhas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1 items-center"
              >
                <InstagramLogoIcon size={20} className="text-[#64a654]" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=5567996016390&text=Ol%C3%A1%2C+vim+do+seu+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1 items-center"
              >
                <WhatsappLogoIcon size={20} className="text-[#64a654]" />
                Whatsapp
              </a>
            </li>
            <li>
              <a
                href="tel:+5567996016390"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1 items-center"
              >
                <PhoneCallIcon size={20} className="text-[#64a654]" />
                (67) 99601-6390
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

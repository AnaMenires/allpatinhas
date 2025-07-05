import React from "react";
import servico_1 from "../assets/servico_1.png";
import servico_2 from "../assets/servico_2.png";
import servico_3 from "../assets/servico_3.png";
import servico_4 from "../assets/servico_4.png";
import servico_5 from "../assets/servico_5.png";
import servico_6 from "../assets/servico_6.png";
import Servico from "./Servico";

const Servicos = () => {
  return (
    <section id="servicos" className="max-w-7xl mx-auto px-4 py-8">
      <div>
        <h2 className="text-[#64a654] font-bold text-3xl flex justify-center p-2">Nossos Serviços</h2>
      </div>
      <div
        className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3 
                      justify-items-center">

        <Servico
          title="Consultas Veterinárias"
          descricao="Atendimento clínico completo no conforto do seu lar — com escuta cuidadosa, diagnóstico especializado e orientações personalizadas para o seu pet."
          imagem={servico_1}
          alt="Consultas Veterinárias"
        />
        <Servico
          title="Vacinação"
          descricao="Todas as vacinas são importadas, com controle rigoroso de qualidade e aplicação segura, respeitando o protocolo ideal para cada fase da vida do seu animal."
          imagem={servico_2}
          alt="Vacinação"
        />
        <Servico
          title="Vermifugação"
          descricao="Prevenção e tratamento eficaz contra vermes, com orientação individualizada conforme a idade, histórico e estilo de vida do pet."
          imagem={servico_3}
          alt="Vermifugação"
        />
        <Servico
          title="Curativos e Medicações"
          descricao="Cuidado com feridas, trocas de curativos e administração de medicamentos, feitos com delicadeza e respeito ao bem-estar do animal."
          imagem={servico_4}
          alt="Curativos e Medicações"
        />
        <Servico
          title="Exames e Testes"
          descricao="Eletrocardiograma, exames laboratoriais e testes rápidos feitos em domicílio, com resultados ágeis e suporte para diagnósticos precisos."
          imagem={servico_5}
          alt="Exames e Testes"
        />
        <Servico
          title="Geriatria e Pediatria"
          descricao="Acompanhamento especializado para filhotes e pets idosos, com atenção às necessidades específicas de cada fase da vida."
          imagem={servico_6}
          alt="Geriatria e Pediatria"
        />
        
      </div>
    </section>
  );
};

export default Servicos;

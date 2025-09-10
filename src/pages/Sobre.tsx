import React from "react";
import { FaHeartbeat, FaEye, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sobre: React.FC = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Sobre o Hospital das Clínicas
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            O objetivo futuro do Hospital das Clínicas é ser reconhecido como um
            complexo hospitalar líder e uma referência de excelência a nível
            nacional e internacional, destacando-se pela qualidade do
            atendimento, pela inovação e pela sua contribuição para a ciência e
            a sociedade.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <FaHeartbeat className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Nossa Missão
            </h2>
            <p className="text-slate-600">
              A razão de existir do Hospital das Clínicas é um tripé focado em
              promover a saúde da população através de três atividades
              principais e integradas: Oferecer atendimento médico de alta
              complexidade e excelência para a sociedade. Formar e capacitar
              novos profissionais de saúde, sendo um campo de aprendizado para
              estudantes da USP e de outras instituições. Gerar e difundir
              conhecimento científico e inovação na área da saúde, buscando
              novas curas e tratamentos.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaEye className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Nossa Visão
            </h2>
            <p className="text-slate-600">
              Ser a clínica de referência na comunidade, reconhecida pela
              excelência médica, inovação e pelo relacionamento de confiança com
              nossos pacientes.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-5xl text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Nossos Valores
            </h2>
            <p className="text-slate-600"></p>
            <p>
              Atuar com integridade, honestidade e transparência em todas as
              relações. Priorizar o acolhimento e o respeito à dignidade de
              pacientes, familiares e colaboradores. Atender às necessidades de
              saúde da população com responsabilidade e foco no bem-estar
              coletivo. Buscar a mais alta qualidade e os melhores resultados em
              todas as áreas de atuação (assistência, ensino e pesquisa).
              Incentivar a pesquisa e a adoção de novas tecnologias e práticas
              para o avanço da medicina.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-600">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe está preparada para te receber. Agende sua consulta
            hoje mesmo e dê o primeiro passo para uma vida mais saudável.
          </p>
          <Link
            to="/consultas"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-slate-100 transition-colors transform hover:scale-105"
          >
            Agendar Consulta
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sobre;

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FaqItemData {
  question: string;
  answer: string;
}

const faqs: FaqItemData[] = [
  { question: 'Como posso agendar uma consulta?', answer: 'Você pode agendar uma consulta diretamente através da nossa página de "Consultas", selecionando a especialidade e o profissional desejado.' },
  { question: 'Quais convênios médicos vocês aceitam?', answer: 'Aceitamos uma ampla variedade de convênios. Para confirmar se o seu é aceito, por favor, entre em contato conosco. Alguns exemplos dos convênios que aceitamos: Allianz Saúde, Amil, Bradesco Saúde, Golden Cross, SulAmérica, entre outros.' },
  { question: 'Preciso de jejum para fazer exames de sangue?', answer: 'Depende do exame. Exames como Glicemia e Colesterol exigem jejum. Outros, como o Hemograma, não. Verifique as instruções específicas na página de "Exames" ou entre em contato.' },
  { question: 'Qual o horário de funcionamento da clínica?', answer: 'Os ambulatórios abrem às 7h e fecham às 18h. As visitas dos pacientes internados nas Enfermarias do ICHC acontecem todos os  dias das 14h às 17h horas, sendo permitida a entrada de 2 pessoas maiores de  18 anos. Seção de Registro da Unida de Emergência Referenciada: de Domingo a domingo 24  horas por dia.' },
];

const FaqItem: React.FC<{ faq: FaqItemData; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none">
        <h3 className="text-xl font-semibold text-slate-800">{faq.question}</h3>
        {isOpen ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-slate-500" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-600">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Perguntas Frequentes (FAQ)</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Encontre respostas para as dúvidas mais comuns dos nossos pacientes.
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {faqs.map((faq, index) => (
          <FaqItem
            key={faq.question}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;

Exames.tsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface Exam {
  name: string;
  description: string;
  preparation: string;
}

const exams: Exam[] = [
  { name: 'Hemograma Completo', description: 'Avalia a saúde geral e detecta uma ampla gama de distúrbios, incluindo anemia, infecção e leucemia.', preparation: 'Jejum de 4 horas recomendado.' },
  { name: 'Glicemia de Jejum', description: 'Mede o nível de açúcar no sangue. Usado para diagnosticar e monitorar diabetes.', preparation: 'Jejum obrigatório de 8 a 12 horas. Apenas água é permitida.' },
  { name: 'Colesterol Total e Frações', description: 'Avalia os níveis de gordura no sangue, incluindo HDL, LDL e triglicerídeos, para verificar o risco de doenças cardíacas.', preparation: 'Jejum de 12 horas recomendado.' },
  { name: 'Raio-X de Tórax', description: 'Imagem do tórax que mostra o coração, pulmões, vias aéreas, vasos sanguíneos e ossos da coluna e do tórax.', preparation: 'Remover joias e objetos de metal. Informar sobre gravidez.' },
];

const ExamItem: React.FC<{ exam: Exam; isOpen: boolean; onClick: () => void }> = ({ exam, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200">
      <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none">
        <h3 className="text-xl font-semibold text-slate-800">{exam.name}</h3>
        {isOpen ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-slate-500" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-600 space-y-4">
          <p>{exam.description}</p>
          <div>
            <h4 className="font-semibold text-slate-700">Preparo:</h4>
            <p>{exam.preparation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Exames: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Nossos Exames</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Confira a lista de exames disponíveis e as instruções de preparo para cada um deles.
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {exams.map((exam, index) => (
          <ExamItem
            key={exam.name}
            exam={exam}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Exames;

Contato.tsx
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contato: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        event.currentTarget.reset();
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">Entre em Contato</h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Tem alguma dúvida ou sugestão? Fale conosco. Nossa equipe está pronta para ajudar.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-lg">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Nossas Informações</h3>
                        <div className="space-y-4 text-slate-600">
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-2xl text-blue-600 mr-4"/>
                                <span>Av. Dr. Enéas de Carvalho Aguiar, 255, São Paulo - SP</span>
                            </div>
                            <div className="flex items-center">
                                <FaPhone className="text-2xl text-blue-600 mr-4"/>
                                <span>Tel.: (0xx11) 2661-0000</span>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-2xl text-blue-600 mr-4"/>
                                <span>contato@hc.com.br</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-64 bg-slate-200 rounded-lg flex items-center justify-center">
                        <p className="text-slate-500 font-semibold"></p><iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7314.592629757024!2d-46.66986!3d-23.557799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b00d3aa487%3A0xfe715b43e354f823!2sHospital%20das%20Cl%C3%ADnicas%20FMUSP!5e0!3m2!1spt-BR!2sbr!4v1757284203851!5m2!1spt-BR!2sbr"
              className="w-full h-[280px] border-0" 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Envie uma Mensagem</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Seu Nome</label>
                            <input type="text" id="name" required className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Seu Email</label>
                            <input type="email" id="email" required className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Assunto</label>
                            <input type="text" id="subject" required className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Mensagem</label>
                            <textarea id="message" rows={4} required className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border-transparent rounded-md shadow-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
                                Enviar Mensagem
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contato;

Consultas.tsx
import React, { useState } from 'react';
import { FaStethoscope, FaHeartbeat, FaBrain, FaBone, FaBaby} from 'react-icons/fa';
import { type IconType } from 'react-icons';

interface Specialty {
  name: string;
  description: string;
  icon: IconType;
}

const specialties: Specialty[] = [
  { name: 'Clínica Geral', description: 'Atendimento primário e cuidados contínuos para sua saúde geral.', icon: FaStethoscope },
  { name: 'Cardiologia', description: 'Cuidados especializados para o coração e sistema circulatório.', icon: FaHeartbeat },
  { name: 'Neurologia', description: 'Diagnóstico e tratamento de doenças do sistema nervoso.', icon: FaBrain },
  { name: 'Ortopedia', description: 'Tratamento de lesões e doenças do sistema musculoesquelético.', icon: FaBone },
  { name: 'Pediatria', description: 'Cuidado completo para a saúde de bebês, crianças e adolescentes.', icon: FaBaby },
];

const Consultas: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSpecialties = specialties.filter(specialty =>
    specialty.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Agende sua Consulta</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Encontre o especialista ideal para suas necessidades. Busque pela especialidade ou navegue pelas opções abaixo.
        </p>
      </div>

      <div className="mb-10 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Buscar por especialidade..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 border border-slate-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {filteredSpecialties.map((specialty) => (
          <div key={specialty.name} className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 flex flex-col w-full md:w-[45%] lg:w-[30%]">
            <specialty.icon className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">{specialty.name}</h3>
            <p className="text-slate-600 flex-grow mb-6">{specialty.description}</p>
            <button className="mt-auto w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              <a href="/login">Ver Disponibilidade</a>
            </button>
          </div>
        ))}
      </div>
       {filteredSpecialties.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate-500 text-lg">Nenhuma especialidade encontrada para "{searchTerm}".</p>
        </div>
      )}
    </div>
  );
};

export default Consultas;

Cadastro.tsx
import React from "react";
import { Link } from "react-router-dom";

const Cadastro: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Conta criada com sucesso!");
  };

  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[70vh]">
      <div className="bg-white rounded-xl shadow-2xl flex flex-col md:flex-row-reverse overflow-hidden max-w-4xl w-full">
        <div className="hidden md:flex w-1/2 bg-blue-500 items-center justify-center p-12">
          <img
            src="/hc.png"
            alt="Login HC"
            className="rounded-3xl br-10 w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Crie sua Conta
          </h2>
          <p className="text-slate-600 mb-8">É rápido e fácil.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700"
              >
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="seuemail@exemplo.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="********"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
              >
                Criar Conta
              </button>
            </div>
          </form>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm font-medium">
              OU
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div>
            <button
              type="button"
              className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            >
              Entrar com GOV
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-slate-600">
            Já tem uma conta?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;

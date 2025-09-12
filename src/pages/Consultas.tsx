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
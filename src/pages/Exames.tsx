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
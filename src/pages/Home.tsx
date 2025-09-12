import React from 'react';
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-4">
            Sua saúde em primeiro lugar, sempre.
          </h1>
          <p className="text-slate-600 text-lg mb-8">
            Agende suas consultas e exames de forma rápida, fácil e segura. Tenha acesso aos melhores profissionais.
          </p>
          <Link 
            to="/consultas"
            className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Agendar Agora
          </Link>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img src="/entrada.webp" alt="Médica sorrindo com tablet" className="max-w-md w-full h-auto rounded-lg" />
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Nossos Serviços</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            Oferecemos uma gama completa de serviços para garantir o seu bem-estar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-lg shadow-md text-center transition-transform transform hover:-translate-y-2">
              <img 
                src="/consultas.png" 
                alt="Consultas" 
                className="h-32 w-auto mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Consultas</h3>
              <p className="text-slate-600">
                Agende consultas com especialistas de diversas áreas, prontos para te atender com excelência.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-md text-center transition-transform transform hover:-translate-y-2">
              <img 
                src="/exames.png"
                alt="Exames" 
                className="h-32 w-auto mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Exames</h3>
              <p className="text-slate-600">
                Realize seus exames em laboratórios parceiros com tecnologia de ponta e resultados rápidos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Nossa Localização</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            Estamos convenientemente localizados no coração da cidade, com fácil acesso e estacionamento. Venha nos visitar!
          </p>
          <div className="w-full max-w-5xl mx-auto rounded-xl shadow-2xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7314.592629757024!2d-46.66986!3d-23.557799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b00d3aa487%3A0xfe715b43e354f823!2sHospital%20das%20Cl%C3%ADnicas%20FMUSP!5e0!3m2!1spt-BR!2sbr!4v1757284203851!5m2!1spt-BR!2sbr"
              className="w-full h-[450px] border-0" 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
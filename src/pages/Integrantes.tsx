import React, { useState, useEffect } from 'react';

interface StaffMember {
  id: number;
  name: string;
  specialty: string;
  image: string;
  linkedin: string;
  github: string;
}

const Integrantes: React.FC = () => {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStaff([
        {
          id: 1,
          name: 'João Victor Veronesi',
          specialty: '1TDSPI',
          image: '/joao.jpg',
          github: 'https://github.com/Veronesi30',
          linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-victor-veronesi-734897276/',
        },
        {
          id: 2,
          name: 'Leonardo Herrera Sabbatini',
          specialty: '1TDSPI',
          image: '/leonardo.jpg',
          github: 'https://github.com/LeoSabbatini',
          linkedin: 'https://www.linkedin.com/in/devsabbatini/',
        },
        {
          id: 3,
          name: 'Rafael de Freitas Moraes',
          specialty: '1TDSPI',
          image: '/rafael.jpg',
          github: 'https://github.com/devfreitas',
          linkedin: 'https://www.linkedin.com/in/rafael-freitas-9345492b5/',
        },
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
        <div className="bg-slate-50 min-h-screen">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">Conheça a Equipe</h1>
            <p className="text-center text-slate-600 mb-12">Carregando integrantes...</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Gera 3 cards de placeholder */}
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                  <div className="h-24 bg-slate-200 rounded-t-lg"></div>
                  <div className="relative -mt-16 flex justify-center">
                    <div className="w-32 h-32 bg-slate-300 rounded-full border-4 border-white"></div>
                  </div>
                  <div className="p-6 text-center">
                    <div className="h-6 bg-slate-200 rounded-md w-3/4 mx-auto mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded-md w-1/4 mx-auto mb-4"></div>
                    <div className="flex justify-center items-center space-x-4 mt-4">
                      <div className="h-8 w-24 bg-slate-200 rounded-md"></div>
                      <div className="h-8 w-24 bg-slate-200 rounded-md"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    )
  }
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-4">Conheça a Equipe</h1>
        <p className="text-center text-slate-600 mb-12">Os integrantes por trás do projeto.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="h-24 bg-slate-200 rounded-t-lg"></div>
              
              <div className="relative -mt-16">
                <img
                  className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-white shadow-md"
                  src={member.image}
                  alt={`Foto de perfil de ${member.name}`}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                
                <p className="inline-block bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {member.specialty}
                </p>
                
                <div className="mt-4 flex justify-center items-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-600 hover:text-black transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrantes;
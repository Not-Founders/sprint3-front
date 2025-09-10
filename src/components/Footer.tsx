import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
                <a href="#" className="text-2xl font-bold text-white">
                    Hospital das <span className="text-blue-500">Clínicas</span>
                </a>
                <p className="text-slate-400">Cuidando da sua saúde com tecnologia e humanidade.</p>
            </div>
            <div>
                <h3 className="font-bold text-white mb-4">Navegação</h3>
                <ul className="space-y-2">
                    <li><a href="/consultas" className="hover:text-white hover:underline transition-colors">Consultas</a></li>
                    <li><a href="/exames" className="hover:text-white hover:underline transition-colors">Exames</a></li>
                    <li><a href="/integrantes" className="hover:text-white hover:underline transition-colors">Integrantes</a></li>
                    <li><a href="/sobre" className="hover:text-white hover:underline transition-colors">Sobre Nós</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold text-white mb-4">Ajuda</h3>
                <ul className="space-y-2">
                    <li><a href="/faq" className="hover:text-white hover:underline transition-colors">FAQ</a></li>
                    <li><a href="/contato" className="hover:text-white hover:underline transition-colors">Contato</a></li>
                    <li><a href="#" className="hover:text-white hover:underline transition-colors">Termos de Serviço</a></li>
                    <li><a href="#" className="hover:text-white hover:underline transition-colors">Política de Privacidade</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold text-white mb-4">Contato</h3>
                <ul className="space-y-3 text-slate-400">
                    <li className="flex items-start"><span className="mr-2 mt-1">📍</span>Av. Dr. Enéas de Carvalho Aguiar, 255<br/>São Paulo, SP</li>
                    <li className="flex items-center"><span className="mr-2">📞</span>Tel.: (0xx11) 2661-0000</li>
                    <li className="flex items-center"><span className="mr-2">✉️</span>contato@hc.com.br</li>
                </ul>
            </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-700 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
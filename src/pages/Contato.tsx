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
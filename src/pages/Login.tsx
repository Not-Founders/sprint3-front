import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Entrada com email e senha!');
    };

    return (
        <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[70vh]">
            <div className="bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">
                <div className="hidden md:flex w-1/2 bg-blue-500 items-center justify-center p-12">
                    <img src="/hc.png" alt="Login HC" className="rounded-3xl br-10 w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Bem-vindo!</h2>
                    <p className="text-slate-600 mb-8">Faça login para continuar.</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="seuemail@exemplo.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700">Senha</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="********"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <a href="#" className="text-sm text-blue-600 hover:underline">Esqueceu sua senha?</a>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
                                Entrar
                            </button>
                        </div>
                    </form>
                    
                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-gray-500 text-sm font-medium">OU</span>
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
                        Não tem uma conta?{' '}
                        <Link to="/cadastro" className="font-medium text-blue-600 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
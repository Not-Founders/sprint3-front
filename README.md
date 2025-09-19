# Hospital das Clínicas - 404-Not-Founders

Um sistema moderno e intuitivo para agendamento de consultas e exames médicos, desenvolvido com React, TypeScript e Tailwind CSS.

## 📋 Sobre o Projeto

O Hospital das Clínicas é uma plataforma web desenvolvida para facilitar o agendamento de consultas médicas e exames laboratoriais. O sistema oferece uma interface moderna, intuitiva e totalmente responsiva, proporcionando uma experiência excepcional aos usuários.

## 👥 Equipe

### Desenvolvedores
- **João Victor Veronesi** - Desenvolvedor Front End 
  - GitHub: [@Veronesi30](https://github.com/Veronesi30)
  - LinkedIn: [João Victor Veronesi](https://www.linkedin.com/in/jo%C3%A3o-victor-veronesi-734897276/)

- **Leonardo Herrera Sabbatini** - Desenvolvedor Back End  
  - GitHub: [@LeoSabbatini](https://github.com/LeoSabbatini)
  - LinkedIn: [Leonardo Sabbatini](https://www.linkedin.com/in/devsabbatini/)

- **Rafael de Freitas Moraes** - Desenvolvedor Front End
  - GitHub: [@devfreitas](https://github.com/devfreitas)
  - LinkedIn: [Rafael Freitas](https://www.linkedin.com/in/rafael-freitas-9345492b5/)

### Instituição
**FIAP - Faculdade de Informática e Administração Paulista**  
Curso: Tecnologia em Desenvolvimento de Sistemas para Internet  
Equipe: 404-Not-Founders - Turma: 1TDSPI 

## 📼 Vídeo de apresentação
https://youtu.be/SkvDIZv1Q3o


### 🎯 Objetivos

- Facilitar o agendamento de consultas e exames
- Oferecer uma interface moderna e acessível
- Demonstrar boas práticas de desenvolvimento React
- Implementar autenticação e rotas protegidas
- Utilizar componentes reutilizáveis com props

## ✨ Funcionalidades

### 🔐 Autenticação
- Sistema de login com "validação"
- Cadastro de novos usuários
- Rotas protegidas
- Persistência de sessão

### 🩺 Agendamentos
- Consultas médicas por especialidade
- Exames laboratoriais
- Busca e filtros avançados
- Modal com detalhes das especialidades

### 🎨 Interface
- Design moderno com Tailwind CSS
- Animações suaves e micro-interações
- Efeitos glassmorphism
- Tema azul e branco
- Totalmente responsivo

### ⚡ Funcionalidades Avançadas
- Componentes reutilizáveis
- Hooks customizados
- Validação de formulários

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19+** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **React Router DOM** - Roteamento para SPAs
- **React Icons** - Biblioteca de ícones

### Ferramentas de Desenvolvimento
- **Vite** - Build tool e dev server
- **ESLint** - Linter para JavaScript/TypeScript

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button.tsx      # Componente de botão com props
│   ├── Card.tsx        # Componente de card flexível
│   ├── Footer.tsx      # Rodapé da aplicação
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Modal.tsx       # Modal reutilizável
│   └── ProtectedRoute.tsx # Proteção de rotas
├── contexts/           # Contextos React
│   └── AuthContext.tsx # Contexto de autenticação
├── hooks/              # Hooks customizados
│   ├── useForm.tsx     # Hook para formulários
│   └── useLocalStorage.tsx # Hook para localStorage
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial
│   ├── Login.tsx       # Página de login
│   ├── Consultas.tsx   # Agendamento de consultas
│   ├── Exames.tsx      # Agendamento de exames
│   ├── Cadastro.tsx    # Cadastro de usuários
│   ├── Contato.tsx     # Página de contato
│   ├── Faq.tsx         # Perguntas frequentes
│   ├── Sobre.tsx       # Sobre o hospital
│   └── Integrantes.tsx # Equipe do projeto
├── routes/             # Configuração de rotas
│   └── index.tsx       # Definição das rotas
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/hospital-clinicas.git
cd hospital-clinicas
```

2. **Instale as dependências**
```bash
npm install tailwindcss @tailwindcss/vite
npm install react-router-dom
npm install react-icons
```

3. **Execute o projeto**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
```

## 🎨 Conceitos Implementados

### 🪝 Hooks
- **useState** - Gerenciamento de estado local
- **useEffect** - Efeitos colaterais e ciclo de vida
- **useContext** - Consumo de contextos
- **useCallback** - Otimização de performance
- **useNavigate** - Navegação programática
- **useLocation** - Acesso à localização atual
- **Hooks Customizados** - useForm, useLocalStorage, useAuth

### 🔧 Props
- **Tipagem com TypeScript** - Interfaces para props
- **Props opcionais** - Valores padrão
- **Props condicionais** - Renderização condicional
- **Event handlers** - Funções como props
- **Children props** - Composição de componentes

### 🛣️ Rotas
- **BrowserRouter** - Roteamento principal
- **Routes & Route** - Definição de rotas
- **NavLink** - Links com estado ativo
- **Rotas protegidas** - Controle de acesso
- **Navegação programática** - useNavigate
- **Estado de navegação** - Passagem de dados entre rotas

## 📱 Funcionalidades por Página

### 🏠 Home
- Hero section com animações
- Apresentação dos serviços
- Estatísticas do hospital
- Localização com mapa integrado

### 🔐 Login/Cadastro
- Formulários com validação
- Autenticação simulada
- Persistência de credenciais
- Redirecionamento inteligente

### 🩺 Consultas
- Lista de especialidades médicas
- Busca e filtros
- Sistema de favoritos
- Modal com detalhes
- Atalhos de teclado

### 🔬 Exames
- Catálogo de exames disponíveis
- Informações de preparo
- Categorização por tipo
- Agendamento direto

### 📞 Contato
- Formulário de contato
- Informações do hospital
- Mapa de localização
- Múltiplos canais de comunicação

## 🎯 Destaques Técnicos

### Arquitetura
- **Componentização** - Componentes reutilizáveis
- **Separação de responsabilidades** - Hooks, contexts, utils
- **Tipagem forte** - TypeScript em todo o projeto
- **Padrões modernos** - Hooks, Custom Hooks

### Performance
- **Lazy loading** - Carregamento otimizado
- **Memoização** - useCallback para otimização
- **Bundle splitting** - Vite para builds otimizados

### UX/UI
- **Design responsivo** - Mobile-first
- **Animações suaves** - Transições CSS
- **Feedback visual** - Estados de loading e erro
- **Acessibilidade** - Boas práticas 


## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso de Tecnologia em Desenvolvimento de Sistemas para Internet da FIAP.

#

**Desenvolvido com ❤️ para a saúde**

[🏥 Hospital das Clínicas] | [📧 Contato] | [📱 (11) 2661-0000]

</div>

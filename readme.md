# 📝 TF-WEB13 - To-Do List Full Stack  

Um projeto full stack de lista de tarefas desenvolvido com **React (frontend)**, **Node.js + Express (backend)** e **MongoDB**.  

![React](https://img.shields.io/badge/React-18.2.0-blue)  
![Node.js](https://img.shields.io/badge/Node.js-20.11.0-green)  
![Express](https://img.shields.io/badge/Express-4.18.2-lightgrey)  
![MongoDB](https://img.shields.io/badge/MongoDB-7.0.0-brightgreen)  


## 🔧 Funcionalidades  
- ✅ Adicionar, editar e excluir tarefas  
- ✅ Marcar tarefas como concluídas  
- ✅ Armazenamento persistente no MongoDB  
- ✅ Interface responsiva  

## ⚙️ Pré-requisitos  
- Node.js (v20 ou superior)  
- MongoDB (local ou [Atlas](https://www.mongodb.com/atlas))  
- NPM ou Yarn  

## 🛠️ Configuração  

### 1. Backend (Node.js + Express)  
```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta `backend` com:  
```env
MONGODB_URI=sua_string_de_conexao_mongodb
PORT=5000
```

Inicie o servidor:  
```bash
npm start
```

### 2. Frontend (React)  
```bash
cd frontend
npm install
npm run dev
```

## 📂 Estrutura do Projeto  
```
TF-WEB13/  
├── backend/  
│   ├── config/        # Configurações do banco  
│   ├── controllers/   # Lógica das rotas  
│   ├── models/        # Schemas do Mongoose  
│   ├── routes/        # Endpoints da API  
│   └── server.js      # Ponto de entrada  
└── frontend/  
    ├── public/        # Assets estáticos  
    ├── src/  
    │   ├── components/ # Componentes React  
    │   ├── App.jsx     # Componente principal  
    │   └── main.jsx    # Renderização do app  
    └── vite.config.js  # Configuração do Vite  
```

## 🤝 Como Contribuir  
1. Faça um **fork** do projeto.  
2. Crie uma branch:  
```bash
git checkout -b feat/nova-funcionalidade
```  
3. Commit suas mudanças:  
```bash
git commit -m "feat: adiciona nova funcionalidade"
```  
4. Envie para o repositório remoto:  
```bash
git push origin feat/nova-funcionalidade
```  
5. Abra um **Pull Request**.  

## 📄 Licença  
MIT  

---  

[Felipwz](https://github.com/Felipwz)  
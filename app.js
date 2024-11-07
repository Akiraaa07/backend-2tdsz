const express = require('express');
const cors = require('cors');
const app = express();
const tarefaRoutes = require('./routes/tarefaRoutes');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

// Middleware para JSON
app.use(express.json());

// Inicializa o CORS
app.use(cors()); 

// Rotas
app.use('/api', userRoutes); // Rota para autenticação
app.use('/api/tarefas', authMiddleware, tarefaRoutes);

module.exports = app;
import { Client } from 'pg';

// Configuração do cliente PostgreSQL
const client = new Client({
  user: 'your_user',
  host: 'localhost',
  database: 'your_db',
  password: 'your_password',
  port: 5432,
});

// Conexão com o banco de dados
client.connect();

// Função que busca um usuário no banco de dados sem sanitização
function findUserByUsername(username: string) {
  const query = `SELECT * FROM users WHERE username = '${username}'`;
  client.query(query, (err, res) => {
    if (err) {
      console.error('Erro ao buscar o usuário:', err);
    } else {
      console.log('Dados do usuário:', res.rows);
    }
  });
}

// Entrada de dados vulnerável
const userInput = process.argv[2]; 
findUserByUsername(userInput);

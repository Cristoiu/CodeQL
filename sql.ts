const query = 'SELECT * FROM users WHERE username = $1';
client.query(query, [username], (err, res) => {
  if (err) {
    console.error('Erro ao buscar o usuário:', err);
  } else {
    console.log('Dados do usuário:', res.rows);
  }
});

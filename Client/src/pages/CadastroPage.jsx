import React, { useState } from 'react';
import '.,/'; // 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Usuário: ${username}, Senha: ${password}`);
  };

  return (
    <div className="login-container">
      <h1>Cadastro</h1>
      <form className="login-form">
        <label>
          Usuário: 
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Senha: 
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleLogin}>
          Cadastrar
        </button>
        <a href="./LoginPage.jsx">Já possui um Cadastro?</a>
      </form>
    </div>
  );
};

export default CadastroPage;

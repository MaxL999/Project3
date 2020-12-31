import React, { useState } from 'react';
import './App.css';

function App() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const registerUser = () => {
    console.log(registerUsername, registerPassword)
  }

  const loginUser = () => {
    console.log(loginUsername, loginPassword)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input onChange={e => setRegisterUsername(e.target.value)} />
          <input onChange={e => setRegisterPassword(e.target.value)} />
          <button onClick={() => registerUser()}>Click</button>
        </div>
        <div>
          <input onChange={e => setLoginUsername(e.target.value)} />
          <input onChange={e => setLoginPassword(e.target.value)} />
          <button onClick={() => loginUser()}>Click</button>
        </div>
      </header>
    </div>
  );
}

export default App;

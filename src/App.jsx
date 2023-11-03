import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');

  const sendToColab = async () => {
    try {
      const result = await axios.post('http://localhost:3001/send-to-colab', { inputText });
      setResponse(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={sendToColab}>Send to Colab</button>
      <div>Response from Colab: {response}</div>
    </div>
  );
}

export default App;

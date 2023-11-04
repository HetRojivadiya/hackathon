import React, { useState } from 'react';

function Test() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSendRequest = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      };

      const url = 'https://11c7-34-134-126-4.ngrok-free.app/api'; // Replace with your API endpoint

      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data.message);
      setResponse(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Ask a Question</h1>
      <input
        type="text"
        placeholder="Enter your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleSendRequest}>Send Question</button>
      <p>Answer: {response}</p>
    </div>
  );
}

export default Test;

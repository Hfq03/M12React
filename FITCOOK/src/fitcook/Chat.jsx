import './Fitcook.css'
import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sender, setSender] = useState('Usuario');

  // Función para enviar un mensaje
  const sendMessage = () => {
    if (input.trim() !== '') {
      // Enviar el mensaje al servidor
      fetch('http://localhost:8000/api/messages', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sender, message: input }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Actualizar la lista de mensajes con el nuevo mensaje del servidor
          setMessages([...messages, data]);
          setInput('');
        })
        .catch((error) => {
          console.error('Error al enviar el mensaje:', error);
        });
    }
  };

  useEffect(() => {
    // Cargar los mensajes del servidor al montar el componente
    fetch('http://localhost:8000/api/messages')
      .then((response) => response.json())
      .then((data) => {
        // Actualizar la lista de mensajes con los mensajes recibidos del servidor
        setMessages(data);
      })
      .catch((error) => {
        console.error('Error al cargar los mensajes:', error);
      });
  }, []);

  return (
    <div className="chat-container">
      <div>
        {messages.map((message, index) => (
          <div className="message" key={index}>
            <span className="sender">{message.sender}: </span>
            {message.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="input-text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="send-button" onClick={sendMessage}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
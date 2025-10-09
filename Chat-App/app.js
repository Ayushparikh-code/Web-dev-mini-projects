import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import moment from 'moment';

const socket = io('http://localhost:3000'); // Ensure this URL is correct for your server

function App() {
  const [name, setName] = useState('anonymous');
  const [totalClients, setTotalClients] = useState(0);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const messageTone = useRef(new Audio('/iphone_text_message.mp3'));
  const messageContainerRef = useRef(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTo(0, messageContainerRef.current.scrollHeight);
    }
  }, [messages, feedback]);

  useEffect(() => {
    socket.on('clients-total', (data) => setTotalClients(data));
    socket.on('chat-message', (data) => {
      messageTone.current.play();
      setMessages((prev) => [...prev, { ...data, type: 'incoming' }]);
    });
    socket.on('feedback', (data) => setFeedback(data.feedback));

    return () => {
      socket.off('clients-total');
      socket.off('chat-message');
      socket.off('feedback');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim() === '') return;
    const data = { name, message: messageInput, dateTime: new Date() };
    socket.emit('message', data);
    setMessages((prev) => [...prev, { ...data, type: 'outgoing' }]);
    setMessageInput('');
    socket.emit('feedback', { feedback: '' }); // Clear feedback on send
  };

  const handleTyping = () => socket.emit('feedback', { feedback: `✍🏻 ${name} is typing...` });
  const handleBlur = () => socket.emit('feedback', { feedback: '' });

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center p-4" style={{ backgroundImage: "url(https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png)" }}>
      {/* Main Chat Container with Glassmorphism Effect */}
      <div className="w-full max-w-2xl h-[90vh] flex flex-col bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700">
        
        {/* Header */}
        <header className="flex justify-between items-center p-4 border-b border-slate-700 shrink-0">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Chit Chat 🚀
          </h1>
          <p className="text-lg text-slate-300">👥 {totalClients} Online</p>
        </header>

        {/* Chat Window */}
        <div className="flex-1 p-6 overflow-y-auto custom-scrollbar" ref={messageContainerRef}>
          <div className="flex flex-col gap-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex animate-fade-in ${msg.type === 'outgoing' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md py-2 px-4 rounded-2xl ${msg.type === 'outgoing' ? 'bg-cyan-600 rounded-br-lg' : 'bg-slate-700 rounded-bl-lg'}`}>
                  <p className="text-white text-md break-words">{msg.message}</p>
                  <p className="text-xs text-slate-300 mt-1 text-right">
                    {msg.name} ● {moment(msg.dateTime).fromNow()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {feedback && <p className="text-slate-400 text-sm italic pt-4 h-6">{feedback}</p>}
        </div>

        {/* Input Form */}
        <footer className="p-4 border-t border-slate-700 shrink-0">
          <form className="flex items-center gap-4" onSubmit={sendMessage}>
            <input
              type="text"
              className="w-36 p-3 bg-slate-700/80 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition text-white placeholder:text-slate-400"
              placeholder="Your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="flex-1 p-3 bg-slate-700/80 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition text-white placeholder:text-slate-400"
              placeholder="Type your message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={handleTyping}
              onBlur={handleBlur}
            />
            <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 p-3 rounded-lg font-bold transition-all shadow-lg active:scale-95 text-white flex items-center gap-2">
              Send <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
}

export default App;
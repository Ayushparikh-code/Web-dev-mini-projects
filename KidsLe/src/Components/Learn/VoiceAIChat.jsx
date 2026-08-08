

import { useConversation } from '@11labs/react';
import { useCallback } from 'react';

export function Conversation() {
  const conversation = useConversation({
    onConnect: () => console.log('Connected'),
    onDisconnect: () => console.log('Disconnected'),
    onMessage: (message) => console.log('Message:', message),
    onError: (error) => console.error('Error:', error),
  });


  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Start the conversation with your agent
      await conversation.startSession({
        agentId: 'dVktbDmswm9gnQTOaRWC', // Replace with your agent ID
      });

    } catch (error) {
      console.error('Failed to start conversation:', error);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <div className="flex flex-col items-center gap-4 m-5 bg-sky/80 p-3">
      <h3 className='text-xl p-1'>Need Help? Say here</h3>
      <div className="flex gap-2">
        
        <button
          onClick={startConversation}
          disabled={conversation.status === 'connected'}
          className="px-4 py-2 bg-blu/50 hover:bg-blu/90 shadow-lg text-whit rounded disabled:bg-re"
        >
          Start Conversation
        </button>

        <button
          onClick={stopConversation}
          disabled={conversation.status !== 'connected'}
          className="px-4 py-2 bg-re/50 hover:bg-re text-whit shadow-lg rounded disabled:bg-re"
        >
          Stop Conversation
        </button>
      </div>

      <div className="flex flex-col items-center">
        <p className='p-2 '>Status: {conversation.status}</p>
        <p className='p-2'>Agent is {conversation.isSpeaking ? 'speaking' : 'listening'}</p>
      </div>
    </div>
  );
}

export default Conversation;
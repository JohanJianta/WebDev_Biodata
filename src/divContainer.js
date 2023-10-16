import { useEffect, createConnection, createElement } from 'react';

const heading = createElement('h1', null, 'React');
const strong = createElement('strong', null, 'best tool');
const paragraph = createElement('p', null, ['The ', strong, ' for building UI']);
const divContainer = createElement('div', { className: 'container' }, [heading, paragraph]);

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
}

export default ChatRoom;
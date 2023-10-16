import React, { useEffect, createConnection } from 'react';

// const heading = React.createElement('h1', null, 'React');
// const strong = React.createElement('strong', null, 'best tool');
// const paragraph = React.createElement('p', null, ['The ', strong, ' for building UI']);
// const divContainer = React.createElement('div', { className: 'container' }, [heading, paragraph]);

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
}

export default ChatRoom;
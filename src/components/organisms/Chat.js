import React from 'react';

import ChatMessages from './ChatMessages';
import ChatInput from '../molecules/ChatInput';
import socketService from '../../services/socketService';

class Chat extends React.Component {
  state = { user: 'anonymous', messages: [] };

  componentDidMount() {
    socketService.socket.on('message', (message) => {
      this.setState((prevState) => {
        const updatedMessages = prevState.messages.concat([message]);

        return { messages: updatedMessages };
      });
    });
  }

  render() {
    const { messages, user } = this.state;
    return (
      <div className="chat">
        <ChatMessages messages={messages} />
        <ChatInput user={user} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Chat;
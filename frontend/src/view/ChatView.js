import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { ClientSocket } from '../core/client-socket';

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this._socket = new ClientSocket();
    this._socket.onConnect();
  }
  // callback(text){
  //   this.set()
  // }
  componentWillMount() {
    // this._socket.onReceive(callback);
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }
  onSend = (messages = []) => {
    
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
    this._socket.onSend("this.state.messages");
    console.log('[TS_LOG] this.state.messages : ' + JSON.stringify(this.state.messages));
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
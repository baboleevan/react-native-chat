import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatView from './src/view';
import { ClientSocket } from './src/core/client-socket';

let cSocket = new ClientSocket();

console.log('[TS_LOG] cSocket.url() : ' + cSocket.url);
let testUrl = cSocket.url = 'url test'
console.log('[TS_LOG] testUrl : ' + testUrl);


export default class App extends React.Component {
  render() {
    return (
      <ChatView />
    );
  }
}

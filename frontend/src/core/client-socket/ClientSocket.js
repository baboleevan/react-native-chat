// Socket.io
import SocketIOClient from 'socket.io-client';
/**
 * let socket = new ClientSocket(url, port);
 * socket.url;
 */
class ClientSocket {
    constructor(url = "localhost", port = 3000) {
        this._url = url;
        this._port = port;
        this._socket = null;
    }
    get url() {
        return this._url;
    }

    set url(url) {
        this._url = url;
    }
    
    get port() {
        return this._port;
    }

    set port(port) {
        this._port = port;
    }

    onConnect = () => {
        try {
            this._socket = SocketIOClient(`${this._url}:${this._port}`);
            console.log('[TS_LOG] onConnect OK');
            return true;
        } catch (error) {
            console.log('[Socket] onConnect error');
            return false;
        }
    }

    /**
     * try, return true, false
     */
    onSend = (message = {}) => {
        // if socket == null return, false.
        try {
            this._socket.emit('chat message', message);
            console.log('[TS_LOG] message : ' + JSON.stringify(message));
            return true;
        } catch (error) {
            console.log('[Socket] onSend error');
            return false;
        }
    }
}

export default ClientSocket;
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
    /**
     * 최대한 간결하게
     * private 개념으로 유저가 함부로 접근 못하게
     * js에서는 _를 private 약속
     */
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
            return true;
        } catch (error) {
            console.log('error');
            return false;
        }
    }

    /**
     * try, return true, false
     */
    onSend = (message = {}) => {
        // if socket == null return, false.
        this._socket.emit('message', message);
    }
}

export default ClientSocket;
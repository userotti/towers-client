import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import reducer from "../reducer";

// import createSocketIoMiddleware from 'redux-socket.io';
// import io from 'socket.io-client';

// let socket = io('http://localhost:5001');
// let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

// Build the middleware for intercepting and dispatching navigation actions
// const router = routerMiddleware(history);
const logger = createLogger({
    //empty options
});

const middleware = applyMiddleware();
let store;
store = createStore(reducer, middleware);

export default store;

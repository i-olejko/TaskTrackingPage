import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


// import { ConnectedRouter } from 'react-router-redux';
// import { createBrowserHistory } from 'history';
import { BrowserRouter as Router} from 'react-router-dom';


import configureStore from './Store/configureStore';
import App from './App';

// import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.min.css';
import * as serviceWorker from './serviceWorker';

// Create browser history to use in the Redux store
// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
// const history = createBrowserHistory({ basename: baseUrl });




// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore();
const rootElement = document.getElementById('root');


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

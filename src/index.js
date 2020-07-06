import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './store'
import ReduxToastr from 'react-redux-toastr';

ReactDOM.render(
    <Provider store={store}>
        <ReduxToastr
            timeOut={2000}
            newestOnTop={false}
            preventDuplicates
            position="bottom-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
        />
        <React.StrictMode>
            <App />
        </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
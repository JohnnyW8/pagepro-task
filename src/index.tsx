import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import App from "./App";
import store from "store";

import "./index.css";

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
    document.getElementById("root")
);

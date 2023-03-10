import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainPage from "./pages/mainPage/MainPage";
import "./App.css"

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <MainPage/>
    </Provider>
);

render(<App />, document.getElementById('root'));
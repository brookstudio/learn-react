import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

function Welcom(props){
    return <h1>Hello, {props.name}</h1>;
}
const element = <Welcom name="Sara"/>;

ReactDOM.render(
    element,
    document.getElementById('root')
);

registerServiceWorker();

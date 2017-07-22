import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

function Welcom(props){
    return <h1>Hello, {props.name}</h1>;
}
function App1(){
    return (
        <div>
            <Welcom name="Sara" />
            <Welcom name="Cahal" />
            <Welcom name="Edite" />
        </div>);
}

ReactDOM.render(
    <App1 />,
    document.getElementById('root')
);

registerServiceWorker();

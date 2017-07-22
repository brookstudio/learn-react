import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

function Avator(props){
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}
function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avator user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}
function Comment(props){
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-data">
                {formatDate(props.date)}
            </div>
        </div>
    )
}
function formatDate(date){
    return date.toLocaleTimeString();
}
const comment = {
    author:{
        name:'Tom',
        avatarUrl:'https://facebook.github.io/react/img/logo.svg'
    },
    text:'This is a comment',
    date:new Date()
};

ReactDOM.render(
    <Comment author={comment.author} text={comment.text} date={comment.date} />,
    document.getElementById('root')
);

registerServiceWorker();

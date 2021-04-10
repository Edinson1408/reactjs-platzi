// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';


import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './components/App';

// import 'bootstrap';

// const element = React.createElement('a',{
//     href:'https://platzi.com'
// },'Hola soy los children');
// {/* <h1>Hello, Platzi Badges!</h1>; */}
// const name='dasdas';
// const element =React.createElement('h1',{},`Hola soy ${name}`);

// const jsx=<h1>Hello, {2+2}</h1>;

const container = document.getElementById('app');

// const jsx= <div>
//     <h1>hola, soy edinson</h1>
//     <p>soy programador</p>
// </div>;

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);

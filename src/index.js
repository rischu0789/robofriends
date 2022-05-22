import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Hello from './Hello';
//import App from './App';
//import Card from './Card';  // Card component
import CardList from './CardList';  // Parent of Card component
import App from './App';  // Parent of all components
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots';



//*PLANNING STEP 3
//render App instead of a CardList.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);


//*PLANNING STEP 2
//render CardList instead of a card at a time.
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CardList robots={robots}/>
);
*/

/*//*PLANNING STEP 1
//render a card at a time
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
  </div>
);*/



//This is from the video and it React v17, which it doesn't work, since this App is using 
// React v18
//ReactDOM.render(<Hello greeting={'Hello React Ninja'}/>, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/Home';
import './index.css';


const App = (
    <div className="border">
        <h1>
            For test purpose
        </h1>
        <Home/>
    </div>
)

ReactDom.render(App, document.getElementById("root"));
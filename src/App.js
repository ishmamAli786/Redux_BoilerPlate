import React from 'react';
import { Counter } from './features/counter/Counter';
import {makeServer} from './server';
import './App.css';

makeServer({environment: 'development'});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import './Bootstrap.css';
import Card from './Components/Card';
import bunny from './Components/images/bunny.jpg';

function App() {
  return (
    <div className="App">
      <h1>Hello CS + The City!</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Card title="Bunny" imgurl={bunny} />
          </div>
          <div className="col-sm">
            <Card title="Bunny" imgurl={bunny} />
          </div>
          <div className="col-sm">
            <Card title="Cat" imgurl={bunny} />
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;

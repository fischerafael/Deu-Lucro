import React from 'react';
import Amount from './components/Amount/Index';
import ProEx from './components/ProfitExpenses/ProfitExpenses';

import './App.css';

function App() {
  return (
    <div className="content">    
        <Amount />
        <ProEx />
    </div>      
  );
}

export default App;

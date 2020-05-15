import React from 'react';
import Amount from './components/Amount/Amount';
import ProEx from './components/ProfitExpenses/ProfitExpenses';
import Transaction from './components/Transaction/Transaction';
import AddTransaction from './components/AddTransaction/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <div className="content"> 
      <GlobalProvider>
        <Amount />
        <ProEx />
        <AddTransaction />
        <Transaction />
      </GlobalProvider>     
    </div>      
  );
}

export default App;

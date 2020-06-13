import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { Disclaimer } from './components/Disclaimer';
import { Personal } from './components/Personal';
import { GlobalProvider } from './context/GlobalState';
import './App.css';


function App() {
  return (
  <GlobalProvider>
     <Header /> 
     <div className="container">
     <Balance />
     <IncomeExpenses />
     <TransactionList />
     <AddTransaction />
     <Disclaimer />
     <Personal />
     </div>
  </GlobalProvider>
  );
}

export default App;

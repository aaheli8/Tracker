import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Expenses from './components/EXPENSES/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Fruits',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 6000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [expenses,setExpenses] = useState(INITIAL_EXPENSES)
  const addExpenseHandler = (expense) => {
     setExpenses(prevExpenses => {
      return[expense, ...prevExpenses]
     });
  };
  return (
    <div>
      <NewExpenses onAddExpense ={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App

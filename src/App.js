import React, {useState} from 'react';
import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense';
const INNITIAL_EXPENSES =  [
  {id: 'e1',
   title: 'Toilet Paper', 
   amount: 'NGN 280.05', 
   date: new Date(2022, 2, 28) },
 
  {id: 'e2',
   title: 'Car Paper', 
   amount: 'NGN 280.05', 
   date: new Date(2021, 2, 2) },
 
  {id: 'e3',
   title: 'Car Insurance', 
   amount: 'NGN 280.05', 
   date: new Date(2022, 3, 2) },
 
  {id: 'e4',
   title: 'Motor Insurance', 
   amount: 'NGN 280.05', 
   date: new Date(2022, 2, 2) },
   ];
 
  const App = () => {
  const [expenses, setExpenses] = useState(INNITIAL_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses)=> {
      return [expense, ...prevExpenses];
    });
    //console.log('In App.js')
    //console.log(expense);
  };
  return (
    <div> 
      <h1>Arraysoft</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
      </div>
    );
}
  

export default App;

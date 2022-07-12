import React, {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear});
    

 return (<div>
   <div className="expenses">
   <ExpenseFilter 
   selected={filteredYear} 
   onChangeFilter={filterChangeHandler}
   />
   <ExpensesChart expenses={filteredExpenses}/>
   <ExpensesList items = {filteredExpenses}/>
     </div>
     </div>
 );
};
//filteredExpenses.length === 0 ? (<p>No Expenses Found.</p>):()

    //<ExpenseItem
     //title={props.items[0].title}
     //amount={props.items[0].amount}
     //date={props.items[0].date}///

    //<ExpenseItem
    //title={props.items[1].title}
     //amount={props.items[1].amount}
     //date={props.items[1].date}//

    //<ExpenseItem
    //title={props.items[2].title}
     //amount={props.items[2].amount}
     //date={props.items[2].date}//

    //<ExpenseItem
    //title={props.items[3].title}
     //amount={props.items[3].amount}
     //date={props.items[3].date}///
    
export default Expenses;
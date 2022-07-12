import expenses from './Assignment1/ExpensesItem'
function App() 
{const expenses = props.expenses
props.expenses =  [
{title: 'Tisue Paper', 
amount: 'NGN 280.05', 
date: new Date(2022, 2, 28) },

{title: 'Carbon Paper', 
amount: 'NGN 280.05', 
date: new Date(2022, 2, 2) },

{title: 'Car Insurance', 
amount: 'NGN 280.05', 
date: new Date(2022, 2, 2) },

{title: 'House Insurance', 
amount: 'NGN 280.05', 
date: new Date(2022, 2, 2) },];
  return (
    <div> 
      <h2> Lets get started!</h2>
      <ExpensesItem title={props.expenses[0].title} 
      amount={props.expenses[0].amount} 
      date={props.expenses[0].date}>
      </ExpensesItem>
      <ExpensesItem title={props.expenses[1].title} 
      amount={props.expenses[1].amount} 
      date={props.expenses[1].date}>
      </ExpensesItem>
      <ExpensesItem title={props.expenses[2].title} 
      amount={props.expenses[2].amount} 
      date={props.expenses[2].date}>
      </ExpensesItem>
      <ExpensesItem title={props.expenses[3].title} 
      amount={props.expenses[3].amount} 
      date={props.expenses[3].date}>
      </ExpensesItem>
    </div>
    );
  }

export default App;
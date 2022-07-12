import './ExpenseDate.css';
function ExpenseDate(props) {
 const year = props.date.getFullYear();
  const month = props.date.toLocaleDateString('en-us', {month: 'long'});
  const day = props.date.getDate('en-us', {day: '2-digits'}
  );
  return (
   <div className="expense-date">
<div className="expense-date__year">{year}</div>
<div className="expense-date__month">{month}</div>
<div className="expense-date__day">{day}</div>
  </div>
  )
}

export default ExpenseDate;
import ExpenseDate from "./ExpenseDate";
import ExpensePrice from "./ExpensePrice"
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      {/* <div>{props.date.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <ExpensePrice amount={amount}/>
      </div>
    </div>
  );
};

export default ExpenseItem;

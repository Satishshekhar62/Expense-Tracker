import React from "react";

function ExpenseList({ filteredExpenses }) {
  return (
    <div className="expense-list-container">
      <h3>{filteredExpenses.length > 0 ? 'List of your Expenses' : null}</h3>
      <ul className="expense-list">
        {filteredExpenses.map(exp => (
          <li key={exp.id}>{exp.title} - {exp.amount} - {exp.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;

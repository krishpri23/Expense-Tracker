// b budgets section

import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../utils/helper";

export default function BudgetItem({ budget, action }) {
  const { id, name, amount } = budget;

  const amountSpent = calculateSpentByBudget(id);
  const remainingAmount = amount - amountSpent;

  return (
    <div className="existing-budgets ">
      {/* title  */}
      <div className="flex gap-5 justify-between p-3 ">
        <h2 className="p-0">{name}</h2>
        <h3>{formatCurrency(amount)} Budgeted</h3>
      </div>
      {/* progress indicator */}
      <progress
        className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-violet-400 [&::-moz-progress-bar]:bg-violet-400 w-full px-2"
        max={amount}
        value={amountSpent}
      >
        {" "}
        {formatPercentage(amountSpent / remainingAmount)}{" "}
      </progress>
      {/* amount spent & remaining */}
      <div className="flex justify-between p-3">
        <p> {formatCurrency(amountSpent)}spent</p>
        <p className="text-gray-400">
          {formatCurrency(remainingAmount)} remaining{" "}
        </p>
      </div>
      <button id="budget-btn"> {action} </button>
    </div>
  );
}

import {
  formatCurrency,
  formatDate,
  getAllMatchingItems,
} from "../utils/helper";
import { Link, useFetcher } from "react-router-dom";

export default function ExpenseItem({ expense }) {
  const fetcher = useFetcher();

  const budget = getAllMatchingItems({
    category: "budget",
    key: "id",
    value: expense.budgetId,
  })[0]; // expecting just one row data

  return (
    <>
      <td> {expense.name} </td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDate(expense.createdAt)}</td>
      <td>
        <Link
          className="bg-purple-500 px-4 py-2 text-white rounded-3xl "
          to={`/budget/${budget.id}`}
        >
          {budget.name}{" "}
        </Link>
      </td>
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button type="submit" id="delete-btn">
            {" "}
            delete
          </button>
        </fetcher.Form>
      </td>
    </>
  );
}

import {
  formatCurrency,
  formatDate,
  getAllMatchingItems,
} from "../utils/helper";
import { Link, useFetcher } from "react-router-dom";
import { HiTrash } from "react-icons/hi2";

export default function ExpenseItem({ expense }) {
  const fetcher = useFetcher();

  //* Passing the single budget item
  const budget = getAllMatchingItems({
    category: "budget",
    key: "id",
    value: expense.budgetId,
  })[0]; // expecting just one row data

  console.log(budget);

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
        {/* Fetcher handle multiple actions at the same time, like deleting multiple item */}
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button type="submit" id="delete-btn">
            <HiTrash className="text-red-600  " />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
}

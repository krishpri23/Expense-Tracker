import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./pages/dashboard";

//actions
import {
  budgetAction,
  budgetLoader,
  dashboardAction,
  dashboardLoader,
  expenseAction,
  expenseLoader,
  logoutAction,
  deleteBudget,
} from "./utils/actions";

//layout
import Main, { MainLoader } from "./layouts/mainLayout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExpensesPage from "./pages/expensesPage";
import BudgetPage from "./pages/budgetPage";
import Error from "./pages/error";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />} loader={MainLoader}>
        <Route
          index
          element={<Dashboard />}
          loader={dashboardLoader}
          action={dashboardAction}
          errorElement={<Error />}
        />
        <Route
          path="expenses"
          element={<ExpensesPage />}
          loader={expenseLoader}
          action={expenseAction}
          errorElement={<Error />}
        />
        {/* Route params /:id */}
        <Route
          path="budget/:id"
          element={<BudgetPage />}
          loader={budgetLoader}
          action={budgetAction}
          errorElement={<Error />}
        >
          <Route path="delete" action={deleteBudget} />
        </Route>
        <Route path="logout" action={logoutAction} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;

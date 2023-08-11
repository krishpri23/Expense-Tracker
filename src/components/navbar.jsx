// * Check for userName, if it exists display Homepage or Intro page. Get username from MainLayout.

import { NavLink, Form } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const NavBar = ({ userName }) => {
  return (
    <nav className=" flex justify-between p-2">
      <NavLink to="/">
        {" "}
        <img className="w-10" src="logo.png" alt="budget" />{" "}
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button
            className="text-red-500 border-2 px-7 py-2 border-red-500 rounded-md bg-red-50"
            type="submit"
          >
            Logout
          </button>
        </Form>
      )}
    </nav>
  );
};

export default NavBar;

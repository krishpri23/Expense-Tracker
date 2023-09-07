import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { HiHome } from "react-icons/hi2";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <main>
      <div className="w-3/4 m-auto text-center bg-slate-200 p-5">
        <h1 className="font-semibold text-xl pb-5 "> We've got a problem! </h1>
        <p> {error.message || error.statusText} </p>
        {/* buttons to navigate */}
        <div className="flex flex-row gap-10 items-center justify-center my-10">
          <button className="flex flex-row gap-2 items-center bg-black text-white px-3 py-2 rounded-xl">
            <div>
              <HiArrowUturnLeft />
            </div>
            <Link to="../">Go back </Link>
            {/* <Link to="/"> Go home</Link> */}
          </button>
          <button className="flex flex-row gap-2 items-center bg-black text-white px-3 py-2 rounded-xl">
            <div>
              <HiHome />
            </div>
            <Link to="../">Go Home </Link>
            {/* <Link to="/"> Go home</Link> */}
          </button>
        </div>
      </div>
    </main>
  );
}

// * Fetch username in Mainloader() and pass it down to Navbar using useLoaderData()

import { useLoaderData, Outlet } from "react-router-dom";
import { fetchData } from "../utils/helper";
import Navbar from "../components/navbar";

export function MainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

export default function Main() {
  const { userName } = useLoaderData();

  return (
    <main>
      <Navbar userName={userName} />
      <Outlet />
    </main>
  );
}

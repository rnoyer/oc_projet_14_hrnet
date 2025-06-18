import { NavLink } from "react-router";
import logo from "/hrnet.svg";

export default function Header({ title, currentLink = true }) {
  return (
    <header className="flex flex-row justify-between items-center uppercase px-4">
      <NavLink to={"/"} className="btn btn-ghost w-40 py-8 my-4">
        <img src={logo} alt="" />
      </NavLink>
      <h1 className="text-3xl font-bold">{title}</h1>
      {currentLink ? (
        <NavLink to={"/view"} className="py-8 px-8 btn">
          View Current <br /> Employees
        </NavLink>
      ) : (
        <NavLink to={"/"} className="py-8 px-8 btn">
          Home
        </NavLink>
      )}
    </header>
  );
}

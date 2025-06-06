import { NavLink } from "react-router";

export default function Page404() {
  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold pb-8">404 Page does not exist :'(</h1>
      <NavLink to={"/"} className="p-8 hover:bg-gray-200">
        Go back Home
      </NavLink>
    </div>
  );
}

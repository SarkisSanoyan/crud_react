import { NavLink } from "react-router-dom"


export function Header() {

  return (
    <div>
    <nav className=" bg-slate-800 flex items-center justify-around text-white p-2 fixed w-full top-0">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users List</NavLink>
    </nav>
    <div className=" p-6"></div>
    </div>
  )
}

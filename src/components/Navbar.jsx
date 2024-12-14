import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <nav className="flex h-20 w-full fixed fixed-top px-5 bg-emerald-600 shadow-md">
        <div className="container mx-auto w-full h-full px-5 flex justify-between">
          <div className=" w-2/12 h-full flex items-center font-bold text-white text-2xl">
            <Link to="/">AAM</Link>
          </div>
          <ul className="h-full w-8/12 flex items-center justify-center gap-5 text-white font-semibold text-xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
          <div className=" w-2/12 h-full flex justify-end items-center font-bold text-xl">
            <Link
              to="/contac"
              className="py-1 px-5 bg-white text-emerald-600 hover:bg-slate-300 rounded-md shadow-md"
            >
              Contac US
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

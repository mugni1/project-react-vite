import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [page, setPage] = useState("Home");

  useEffect(() => {
    setPage(document.title);
  }, []);
  return (
    <>
      <nav className="flex h-20 w-full fixed fixed-top px-5 bg-slate-800 shadow-md">
        <div className="container mx-auto w-full h-full px-5 flex justify-between">
          <div className=" w-2/12 h-full flex items-center font-bold text-white text-2xl">
            <Link to="/">AAM</Link>
          </div>
          <ul className="h-full w-8/12 flex items-center justify-center text-white font-semibold text-xl">
            {page == "Home" ? (
              <li className="bg-red-50 py-1 px-5 transition-all rounded-lg text-slate-800">
                <Link to="/">Home</Link>
              </li>
            ) : (
              <li className=" py-1 px-5 transition-all rounded-lg">
                <Link to="/">Home</Link>
              </li>
            )}
            {page == "About" ? (
              <li className="bg-red-50 py-1 px-5 transition-all rounded-lg text-slate-800">
                <Link to="/about">About</Link>
              </li>
            ) : (
              <li className=" py-1 px-5 transition-all rounded-lg">
                <Link to="/about">About</Link>
              </li>
            )}
            {page == "Blog" || page == "Blog Detail" ? (
              <li className="bg-red-50 py-1 px-5 transition-all rounded-lg text-slate-800">
                <Link to="/blog">Blog</Link>
              </li>
            ) : (
              <li className=" py-1 px-5 transition-all rounded-lg">
                <Link to="/blog">Blog</Link>
              </li>
            )}
          </ul>
          <div className=" w-2/12 h-full flex justify-end items-center font-bold text-xl">
            <Link
              to="/contac"
              className="py-1 px-5 bg-white text-slate-800 hover:bg-slate-300 rounded-md shadow-md"
            >
              Contac US
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

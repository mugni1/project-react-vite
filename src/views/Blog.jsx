import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog";
  });
  return (
    <>
      <Navbar />
      <section className="container mx-auto pt-24 px-5">
        <h1 className="font-bold text-xl mb-5">Ini Halaman Blog</h1>
      </section>

      <section className="container mx-auto flex flex-wrap w-full justify-between">
        <BlogCard />
      </section>
    </>
  );
}

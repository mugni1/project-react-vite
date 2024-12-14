import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <Navbar />
      <section className="pt-24">
        <h1>Ini Halaman About</h1>
      </section>
    </>
  );
}

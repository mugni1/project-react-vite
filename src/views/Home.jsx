import { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <Navbar />
      <section className="pt-24">
        <h1>Ini Halaman Home</h1>
      </section>
    </>
  );
}

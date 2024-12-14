import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function Contac() {
  useEffect(() => {
    document.title = "Contac Us";
  });
  return (
    <>
      <Navbar />
      <section className="pt-24">
        <h1>Ini Halaman Contac</h1>
      </section>
    </>
  );
}

import { Route, Routes } from "react-router";
import Home from "./views/Home";
import About from "./views/About";
import Blog from "./views/Blog";
import Contac from "./views/Contac";
import BlogDetail from "./views/BlogDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id/detail" element={<BlogDetail />} />
        <Route path="/contac" element={<Contac />} />
      </Routes>
    </>
  );
}

export default App;

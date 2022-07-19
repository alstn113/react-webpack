import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import Post from "@/pages/Post/Post";
import Counter from "@/pages/Counter/Counter";

const App = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="/counter" element={<Counter />} />

      {/* protected routes */}

      {/* catch all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

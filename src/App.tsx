import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import About from "@/pages/About/About";

const App = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* protected routes */}

      {/* catch all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

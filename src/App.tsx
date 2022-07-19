import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import Post from "@/pages/Post/Post";
import Counter from "@/pages/Counter/Counter";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorFallback from "./components/ErrorFallback/ErrorFallback";
import { MESSAGE } from "./constants/messages";
import Header from "@/components/Header/Header";

const App = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback message={MESSAGE.ERROR.UNKNOWN} />}>
      <Header />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/counter" element={<Counter />} />

        {/* protected routes */}

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;

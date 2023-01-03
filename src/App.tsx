import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import { Navigation } from "./components/Navigation";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </>
  );
}
export default App;

import { Route, Routes, useLocation } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Toaster } from "react-hot-toast"
import { Footer } from "./components/Footer";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Login } from "./components/Login";
import { AllProducts } from "./pages/AllProducts";

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin} = useContext(AppContext);

  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}
      
      <Toaster />
      
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32 mt-24 sm:mt-28"}`}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<AllProducts />}></Route>
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  )
}

export default App

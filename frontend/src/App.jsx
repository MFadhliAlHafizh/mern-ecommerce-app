import { Route, Routes, useLocation } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Toaster } from "react-hot-toast"
import { Footer } from "./components/Footer";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Login } from "./components/Login";
import { AllProducts } from "./pages/AllProducts";
import { ProductCategory } from "./pages/ProductCategory";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import { AddAddress } from "./pages/AddAddress";
import { MyOrders } from "./pages/MyOrders";

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin} = useContext(AppContext);

  return (
    <div className="relative">
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}
      
      <Toaster />
      
      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32 mt-24 sm:mt-28"}`}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<AllProducts />}></Route>
          <Route path="/products/:category" element={<ProductCategory />}></Route>
          <Route path="/products/:category/:id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/add-address" element={<AddAddress />}></Route>
          <Route path="/my-orders" element={<MyOrders />}></Route>
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  )
}

export default App

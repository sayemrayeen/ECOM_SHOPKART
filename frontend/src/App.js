import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PayementScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import UserListScreen from "./Components/UserListScreen";
import UserEditScreen from "./Screens/UserEditScreen";
import ProductListScreen from "./Screens/ProductListScreen";
import ProductEditScreen from "./Screens/ProductEditScreen";
import OrderListScreen from "./Screens/OrderListScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/shipping" element={<ShippingScreen />} exact />
            <Route path="/payment" element={<PaymentScreen />} exact />
            <Route path="/placeorder" element={<PlaceOrderScreen />} exact />
            <Route path="/order/:id" element={<OrderScreen />} exact />
            <Route path="/profile" element={<ProfileScreen />} exact />
            <Route path="/login" element={<LoginScreen />} exact />
            <Route path="/register" element={<RegisterScreen />} exact />
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/page/:pageNumber" element={<HomeScreen />} exact />
            <Route path="/search/:keyword" element={<HomeScreen />} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<HomeScreen />}
              exact
            />
            <Route path="/product/:id" element={<ProductScreen />} exact />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen />}
            />
            <Route
              path="/admin/productlist"
              element={<ProductListScreen />}
              exact
            />
            <Route
              path="/admin/productlist/:pageNumber"
              element={<ProductListScreen />}
              exact
            />
            <Route path="/admin/orderlist" element={<OrderListScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

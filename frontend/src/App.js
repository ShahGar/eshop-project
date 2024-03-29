import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";
import Home from "./components/LandingPage/Home";
import About from "./components/LandingPage/About";
import Work from "./components/LandingPage/Work";
import Testimonial from "./components/LandingPage/Testimonial";
import Contact from "./components/LandingPage/Contact";
import Footer from "./components/LandingPage/Footer";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/" component={About} exact />
      <Switch>

        <Route path="/" component={HomeScreen} exact />
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/page/:pagenumber" component={HomeScreen} exact />
        <Route
          path="/search/:keyword/page/:pageNumber"
          component={HomeScreen}
          exact
        />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRouter path="/profile" component={ProfileScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <PrivateRouter path="/shipping" component={ShippingScreen} />
        <PrivateRouter path="/payment" component={PaymentScreen} />
        <PrivateRouter path="/placeorder" component={PlaceOrderScreen} />
        <PrivateRouter path="/order/:id" component={OrderScreen} />
        <Route path="*" component={NotFound} />
        
      </Switch>
        
        <Route path="/" component={Work} exact />
        <Route path="/" component={Testimonial} exact />
        <Route path="/" component={Contact} exact />
        <Route path="/" component={Footer} exact />
        
        
    </Router>
  );
};

export default App;

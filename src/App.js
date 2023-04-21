import './App.css';
import i18n from "./i18n";
import TopBar from "./Components/Sections/TopBar/topBar";
import NavBar from "./Components/Sections/NavBar/navBar";
import WebHeader from './Components/Sections/Hero/webHeader';
import Chef from './Components/Sections/Chef/chef';
import Contact from './Components/Sections/Contact/contact';
import Footer from './Components/Sections/Footer/footer';
import Photos from './Components/Sections/Photos/photos';
import Menu from './Components/Sections/menu';
import Testimonials from './Components/Sections/Testimonial/testimonials';
import WhyUs from './Components/Sections/WhyUS/whyUs';
import Book from './Components/Sections/book';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CouponPopup from './Components/Sections/couponPopup';
import './i18n';
import ProductsSection from './Components/Sections/ProductsSection/ProductsSection';

function Website() {
  return (
    <>
      <TopBar />
      <CouponPopup />
      <NavBar />
      <WebHeader />
      <WhyUs />
      <ProductsSection />
      {/* <Menu /> */}
      <Testimonials />
      <Photos />
      <Chef />
      <Contact />
      <Footer />
      <Book />
    </>
  )
}

function App() {
  return (
    <>
      {Website()}
    </>
  );
}

export default App;
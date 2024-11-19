import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import TrustPilot from './components/TrustPilot';
import FeaturedProducts from './components/FeaturedProducts';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <FeaturedProducts />
                  <AboutSection />
                  <ContactSection />
                  <TrustPilot />
                </>
              } />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
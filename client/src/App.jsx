import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Pet from './pages/Pet';  
import Products from './pages/Products';
import Register from './pages/Register';
import Login from './pages/Login';
import PetManager from './admin/PetManager';
import ProductManager from './admin/ProductManager';
import Service from './admin/Service';

import AdminLayout from './admin/AdminLayout';
import { Navigate } from 'react-router-dom';
function App() {
  return (
    <Router>
  <Routes>
    {/* Bọc tất cả route admin dưới AdminLayout */}
    <Route path="/admin" element={<AdminLayout/>}>
      <Route index element={<Navigate to="pets" />} />
      <Route path="pets" element={<PetManager />} />
      <Route path="products" element={<ProductManager />} />
      <Route path="services" element={<Service />} />
    </Route>
    {/* Các route khác */}
    <Route path="register" element={<Register/>} />
    <Route path="login" element={<Login/>} />
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="pets" element={<Pet />} />
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
</Router>
  );
}
export default App;

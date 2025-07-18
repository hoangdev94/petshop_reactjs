import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/App.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

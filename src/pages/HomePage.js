import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyNavbar from '../components/Navbar';


const HomePage = () => {
  return (
    <>
      <Header />
      <MyNavbar />
      <div className="container">
        <h1>Welcome to our e-commerce store!</h1>
        <p>Explore our wide range of products.</p>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

// Layout of our project. Allows for separate page extensibility 
// (more projects might need their own page in the future)

const Layout = () => {
  return (
    <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  );
}

export default Layout;
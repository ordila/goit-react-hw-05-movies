import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <div className="wrapper-header">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

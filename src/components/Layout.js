import React from 'react';
import '../App.css';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen flex-grow">
    {children} 
    </div>
  );
};

export default Layout;

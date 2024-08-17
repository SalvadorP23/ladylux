// src/LayoutWithHeader.js
import React from 'react';
import Header from './header';

const LayoutWithHeader = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);

export default LayoutWithHeader;

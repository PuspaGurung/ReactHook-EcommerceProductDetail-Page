import React from 'react';
import BtnToggleAppColor from '../ui/BtnToggleAppColor';

const Header = () => {
  return (
    <header className="page-header" id="page-header">
      <div className="container">
        <div className="header-wrapper">
          <BtnToggleAppColor />
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="page-footer" id="page-footer">
      <div className="container">
        <div className="footer-wrapper">
          <p>
            <small>
              &copy; {new Date().getFullYear()} Copyright: Lorem ipsum dolor sit
              amet.
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Header, Footer };

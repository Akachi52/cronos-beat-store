import React, { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartRef = useRef(null);

  // Close cart dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cartRef.current && !(cartRef.current as HTMLElement).contains(e.target as Node)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="text-center bg-black text-white" style={{borderBottom:'1px solid #fff', borderTop:'1px solid #fff'}}>
      <nav className="navbar navbar-expand-lg navbar-dark px-3 position-relative">
        <div className="container-fluid d-flex align-items-center w-100">

          {/* Left: Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand fw-bold position-absolute top-50 start-50 translate-middle m-0 text-white" href="#">
            LOGO
          </a>

          <div className={`collapse navbar-collapse`}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3 ms-lg-5">
                <li className="nav-item"><a className="nav-link text-white" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="/Beats">Beats</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="/FAQ">FAQ</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="/contact">Contact</a></li>
            </ul>
          </div>

          <ul className="navbar-nav flex-row gap-3 ms-auto" ref={cartRef}>
            <li className="nav-item position-relative">
              <button
                className="nav-link btn btn-link text-decoration-none text-white"
                onClick={() => setIsCartOpen(prev => !prev)}
              >
                Cart 
              </button>

              {/* cart dropdown */}
              {isCartOpen && (
                <div className="position-absolute end-0 mt-2 p-3 bg-white shadow rounded text-start text-dark" style={{ width: '250px', zIndex: 1050 }}>
                  <p className="fw-bold mb-2">Cart Items</p>
                  <ul className="list-unstyled mb-2">
                    <li className="d-flex justify-content-between mb-2">
                      <span>Beat 1</span>
                      <span>$19.99</span>
                    </li>
                    <li className="d-flex justify-content-between mb-2">
                      <span>Beat 2</span>
                      <span>$29.99</span>
                    </li>
                  </ul>
                  <button className="btn btn-danger btn-sm w-100">Checkout</button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Collapsible menu items */}
      <div className={`collapse navbar-collapse d-lg-none ${isMenuOpen ? 'show' : ''}`}>
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item"><a className="nav-link text-white" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/Beats">Beats</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/FAQ">FAQ</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

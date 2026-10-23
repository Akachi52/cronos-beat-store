import React from 'react';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

export default function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row gy-4">
          
          {/* Left: Logo */}
          <div className="col-md-4 text-center text-md-start">
            <img
              src="/"
              alt="Logo"
              style={{ width: 120, marginBottom: '0.5rem' }}
            />
          </div>

          {/* Nav Links */}
          <div className="col-md-4 text-center">
            <h6 className="text-uppercase mb-3">Navigation</h6>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled small">
                  <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                  <li><a href="/Beats" className="text-white text-decoration-none">Beats</a></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled small">
                  <li><a href="/FAQ" className="text-white text-decoration-none">FAQ</a></li>
                  <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="col-md-4 text-center text-md-end">
            <h6 className="text-uppercase mb-3">Socials</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="btn btn-sm">
                <i className="bi bi-instagram">ig</i>
              </a>
              <a href="#" className="btn btn-sm">
                <i className="bi bi-youtube">yt</i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

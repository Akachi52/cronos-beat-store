import React from 'react'
import './pages.css'

export default function Contact_us() {
  return (
    <div>
          <section className="mb-5 px-3"  style={{minHeight:'75vh'}}>
          <h3 className="fw-bold mb-4 mt-4 text-center">CONTACT US</h3>
          <form className="mx-auto" style={{ maxWidth: '600px' }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Write your message..."></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Send Message</button>
          </form>
        </section>
    </div>
  )
}

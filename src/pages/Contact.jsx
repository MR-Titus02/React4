import React from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
function Contact() {
  return (
    <>
    <Navbar/>
    <div className="container py-5">
      <h2 className="text-primary fw-bold mb-4">
        <i className="bi bi-chat-left-dots-fill me-2"></i>Get in Touch
      </h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Write something..."></textarea>
        </div>
        <button type="submit" className="btn btn-dark">
          <i className="bi bi-send-fill me-1"></i>Send Message
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;

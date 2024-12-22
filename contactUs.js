import React from "react";
import "./ontactus.css"; // Create a corresponding CSS file for styles.

function ContactUs() {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">FOREVER</div>
        <nav>
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Contact Section */}
      <section className="contact">
        <h1>Contact <span>Us</span></h1>
        <div className="contact-content">
          <div className="contact-image">
            <img src="https://via.placeholder.com/400" alt="Office Desk" />
          </div>
          <div className="contact-info">
            <h2>Our Store</h2>
            <p>54709 Wilms Station</p>
            <p>Suite 550, Washington, USA</p>
            <p>Tel: (415) 555-0132</p>
            <p>Email: greatstackdev@gmail.com</p>

            <h2>Careers at Forever</h2>
            <p>Learn more about our teams and job openings.</p>
            <button>Explore Jobs</button>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="subscribe">
        <h2>Subscribe now & get 20% off</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="footer-content">
          <div>
            <h3>FOREVER</h3>
            <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#delivery">Delivery</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3>Get in Touch</h3>
            <p>Phone: +1-212-456-7890</p>
            <p>Email: greatstack.dev@gmail.com</p>
          </div>
        </div>
        <p>&copy; 2024 GreatStack.dev - All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;

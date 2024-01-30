import React, { useEffect, useState } from 'react';
import './footer.css'; // Import your CSS file for styling

const AppFooter = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10; // You can adjust this threshold as needed
      setShowFooter(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`app-footer${showFooter ? ' show' : ''}`}>
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-link-group">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-link-group">
            <h3>Support</h3>
            <ul>
              <li><a href="/helpline">Helpline</a></li>
              <li><a href="/emergency">Emergency</a></li>
              <li><a href="/contactUs">Contact</a></li>
              <li><a href="/feedback">Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-info">
          <p>&copy; 2023 Your App Name. All rights reserved.</p>
          <p>Contact: support@example.com</p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;

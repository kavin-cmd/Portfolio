import React from 'react';
import '../css/Contact.css'; // Ensure this CSS file is available for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1 className="contact-title">Contact Me</h1>
      </header>

      <section className="contact-info">
        <h2 className="contact-subtitle">Get in Touch</h2>
        <p>
          I'm always open to new opportunities, collaborations, or simply discussing data science and analytics. If you have any questions or would like to connect, feel free to reach out through any of the following methods:
        </p>

        <ul className="contact-details">
          <li>
            <strong>Email:</strong> <a href="mailto:kavinparikh20@gmail.com" className="contact-link">kavinparikh20@gmail.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kavin-parikh-38092b18b/" className="contact-link" target="_blank" rel="noopener noreferrer">linkedin.com/in/kavinparikh</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href="https://github.com/kavin-cmd" className="contact-link" target="_blank" rel="noopener noreferrer">github.com/kavin-cmd</a>
          </li>
          <li>
            <strong>Medium:</strong> <a href="https://medium.com/@predictivepulse" className="contact-link" target="_blank" rel="noopener noreferrer">@predictivepulse</a>
          </li>
        </ul>
      </section>

      <section className="contact-footer">
        <p>
          Thank you for visiting my portfolio. I look forward to connecting with you and exploring potential opportunities together. Your feedback and inquiries are always welcome!
        </p>
      </section>
    </div>
  );
};

export default Contact;

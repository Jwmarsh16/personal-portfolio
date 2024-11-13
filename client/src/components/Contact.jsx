import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ from_name: '', reply_to: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your User ID
    emailjs.init('mUITg9eix2eRYCyg3'); // Replace 'YOUR_USER_ID' with your actual User ID from EmailJS
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the form data
    emailjs.sendForm('service_muy1ltk', 'template_f0nuyh6', '#myForm')
      .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSubmitted(true);
      })
      .catch((error) => {
          console.log('FAILED...', error);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        {submitted ? (
          <p>Thank you for reaching out! I'll get back to you soon.</p>
        ) : (
          <form id="myForm" onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="reply_to"
                value={formData.reply_to}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;

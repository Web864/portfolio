import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! I will get back to you soon.");
  };

  return (
    <section id="contact">
      <div className="section-wrap">
        <div className="section-header fade-up visible">
          <p className="section-tag">Let's Talk</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear
            from you.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Contact Form */}
          <div className="contact-form fade-up visible">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your Full Name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-input"
                  placeholder="Your Message"
                  rows="2"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-center"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div
            className="contact-info fade-up visible"
            style={{ transitionDelay: "0.15s" }}
          >
            <p className="msg-text">
              Whether you have a project idea, a job opportunity, or just want
              to say hello — my inbox is always open.
            </p>

            <a
              href="mailto:rabianaz864@gmail.com"
              className="contact-card"
            >
              <div className="contact-card-icon">📧</div>
              <div>
                <div className="contact-card-label">Email</div>
                <div className="contact-card-value">
                  rabianaz864@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/rabia-naz-01263b339"
              // target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">💼</div>
              <div>
                <div className="contact-card-label">LinkedIn</div>
                <div className="contact-card-value">
                  https://www.linkedin.com/in/rabia-naz-01263b339
                </div>
              </div>
            </a>

            <a
              href="https://github.com/Web864"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">🐙</div>
              <div>
                <div className="contact-card-label">GitHub</div>
                <div className="contact-card-value">
                  https://github.com/Web864
                </div>
              </div>
            </a>

            <div className="response-box">
              <div className="response-time">Response Time</div>
              <div className="within">Within 24 hours</div>
              <div className="day-avail">Mon – Sat, 9:00 AM – 6:00 PM PKT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
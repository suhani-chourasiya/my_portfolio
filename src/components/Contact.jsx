import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <div className="contact-container">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>suhanichourasiya23@gmail.com</p>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p>+91 9893922830</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Bhopal</h3>
          <p>Madhya Pradesh, India</p>
        </div>

        <div className="contact-card">
  <FaGithub className="contact-icon" />
  <h3>GitHub</h3>

  <a
    href="https://github.com/suhani-chourasiya"
    target="_blank"
    rel="noreferrer"
  >
    Visit Profile
  </a>
</div>

     <div className="contact-card">
  <FaLinkedin className="contact-icon" />
  <h3>LinkedIn</h3>

  <a
    href="https://www.linkedin.com/in/suhani-chourasiya-b5149a317/"
    target="_blank"
    rel="noreferrer"
  >
    Connect with Me
  </a>
</div>   

      </div>

    </section>
  );
};

export default Contact;
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Suhani Chourasiya</h2>

      <p>Frontend Developer | React Developer</p>

      <div className="footer-icons">
        <a
          href="https://github.com/suhani-chourasiya"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/suhani-chourasiya-b5149a317/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="copyright">
        Made with <FaHeart className="heart" /> by Suhani Chourasiya
      </p>
    </footer>
  );
};

export default Footer;
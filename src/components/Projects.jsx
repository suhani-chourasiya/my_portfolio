import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Project
      </motion.h2>

      <motion.div
        className="project-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="project-image">
          <img src="/image.jpeg" alt="Women Safety Alert System" />
        </div>

        <div className="project-content">
          <h3>Women Safety Alert System</h3>

          <p>
            Developed a responsive Women Safety Alert System that enables users
            to send SOS alerts and share live location during emergencies. The
            application focuses on providing a simple, fast, and user-friendly
            interface for enhanced personal safety.
          </p>

          <h4>Tech Stack</h4>

          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>HTML</span>
          </div>

          <a
            href="https://github.com/tashumalviya/HerShield.git"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            <FaGithub />
            View on GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
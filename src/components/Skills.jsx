import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiBootstrap, SiCplusplus, SiPython } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className="category-container">

        <div className="category-card">
          <h3>Frontend Technologies</h3>

          <div className="skill-list">
            <span><FaHtml5 /> HTML5</span>
            <span><FaCss3Alt /> CSS3</span>
            <span><FaJs /> JavaScript</span>
            <span><FaReact /> React</span>
           
          </div>
        </div>

        <div className="category-card">
          <h3>Programming Languages</h3>

          <div className="skill-list">
            <span><SiCplusplus /> C++</span>
            <span><SiPython /> Python(Basic)</span>
          </div>
        </div>

        <div className="category-card">
          <h3>Core Concepts</h3>

          <div className="skill-list">
            <span>💻 DSA</span>
            <span>📘 OOPS</span>
            <span>📱 Responsive Web Design</span>
          </div>
        </div>

        <div className="category-card">
          <h3>Tools</h3>

          <div className="skill-list">
            <span><FaGitAlt /> Git</span>
            <span><FaGithub /> GitHub</span>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Skills;
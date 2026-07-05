import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2>About Me</h2>

        <p>
          I'm <span>Suhani Chourasiya</span>, a passionate Frontend Developer
          with a strong foundation in HTML, CSS, JavaScript, and React. I enjoy
          building responsive, user-friendly, and visually appealing web
          applications that provide a great user experience.
        </p>

        <div className="about-cards">

          <div className="card">
            <h3>🎓 Education</h3>
            <p>B.Tech in Computer Science</p>
          </div>

          <div className="card">
            <h3>💻 Experience</h3>
            <p>Frontend Projects using React & JavaScript</p>
          </div>

          <div className="card">
            <h3>🚀 Goal</h3>
            <p>Become a skilled Frontend Developer and build impactful web applications.</p>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default About;
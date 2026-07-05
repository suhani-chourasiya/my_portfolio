import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <h3>Hello, I'm</h3>

        <h1>Suhani Chourasiya</h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "React Developer",
            2000,
           
          ]}
          wrapper="h2"
          repeat={Infinity}
        />

        <p>
          Passionate Frontend Developer skilled in React, JavaScript, HTML and
          CSS. I love building modern, responsive and user-friendly websites.
        </p>

        <div className="hero-buttons">
    <a href="/suhani's resume.pdf" download className="resume-btn">
        Download Resume
    </a>

    <button>Contact Me</button>
</div>

      </div>

      <div className="hero-right">
        <img
          src={profile}
          alt="Suhani Chourasiya"
        />
      </div>

    </section>
  );
};

export default Home;
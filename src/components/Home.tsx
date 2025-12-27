import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const skills = [
  "DeFi Protocol Design",
  "Full-stack Development",
  "Product Management",
  "UI Design",
  "Business Development",
];

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>Ze Chen</h1>
        <h2 className={styles.tagline}>I build things in web3</h2>
        <p className={styles.description}>
          I'm a builder with a proven track record of driving 0-1 growth.
          Combining technical expertise, product sense, and a unique background
          in professional sports to build impactful products. Currently focused
          on DeFi protocol design and full-stack development.
        </p>

        <div className={styles.skills}>
          {skills.map((skill) => (
            <span key={skill} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>

        <div className={styles.cta}>
          <Link to="/experiences" className={styles.ctaButton}>
            View Experience
            <svg
              className={styles.arrow}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link to="/projects" className={styles.ctaButton}>
            See Projects
            <svg
              className={styles.arrow}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backLink}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </Link>

      <header className={styles.header}>
        <p className={styles.overline}>What's Next?</p>
        <h1>Get In Touch</h1>
        <p className={styles.description}>
          I'm currently open to new opportunities and collaborations. Whether
          you have a question, a project idea, or just want to say hi, feel free
          to reach out!
        </p>
      </header>

      <a
        href="https://x.com/ze_thinking"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ctaButton}
      >
        Say Hello
      </a>
    </div>
  );
}

export default Contact;

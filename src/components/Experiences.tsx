import React from "react";
import { Link } from "react-router-dom";
import styles from "./Experiences.module.css";

const experiences = [
  {
    id: "1",
    company: "Ostium",
    logo: "Ostium Logo.png",
    title: "APAC Growth Lead",
    duration: "2025 — Present",
    description:
      "Working as a growth lead at Ostium, a perp dex focusing on RWA.",
    accomplishments: [],
    technologies: ["Growth", "BD"],
  },
  {
    id: "2",
    company: "Sosovalue - SoDEX",
    logo: "Sosovalue Logo.png",
    title: "Product Consultant",
    duration: "2025 — Present",
    description:
      "Working as a data-focused product consultant at Sosovalue's SoDEX, a CLOB perp dex.",
    accomplishments: [],
    technologies: ["Product", "Data", "Perp Dex"],
  },
  {
    id: "3",
    company: "Vesta Finance",
    logo: "Vesta Logo.svg",
    title: "Co-founder & CEO",
    duration: "2021 — 2023",
    description:
      "Co-founded a stablecoin protocol on Arbitrum, Ethereum's leading Layer 2. Raised US$11.6m and reached US$70m TVL at peak.",
    accomplishments: [
      "First stablecoin with real-time market-trailing interest rate mechanism",
      "Generated US$6m+ in profits over 1.5 years",
      "Grew community from 0 to 30,000 members in 3 months",
    ],
    technologies: [
      "Partnership",
      "Product Strategy",
      "Growth",
      "DeFi Protocol Design",
    ],
    learnMore: "/vesta-learnings",
  },
  {
    id: "4",
    company: "Zapper",
    logo: "Zapper Logo.svg",
    title: "Software Engineer & Product Manager",
    duration: "2020 — 2021",
    description:
      "Full-stack engineer/product manager at Zapper, one of the leading user-facing apps in Ethereum.",
    accomplishments: [
      "Designed swap feature with $5B volume in first year",
      "Integrated 100+ DeFi protocols into the platform",
      "Led integration framework reducing dev time by 40%",
    ],
    technologies: ["React", "Node.js", "TypeScript", "Solidity"],
  },
];

function Experiences() {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backLink}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </Link>

      <header className={styles.header}>
        <h1>Experience</h1>
        <p>
          A timeline of my professional journey. Hover over each role to see key
          accomplishments and the technologies I worked with.
        </p>
      </header>

      <section className={styles.timeline}>
        <div className={styles.timelineLine} />
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </section>
    </div>
  );
}

interface Experience {
  id: string;
  company: string;
  logo: string;
  title: string;
  duration: string;
  description: string;
  accomplishments: string[];
  technologies: string[];
  learnMore?: string;
}

function ExperienceCard({ experience }: { experience: Experience }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.cardMeta}>
        <span className={styles.duration}>{experience.duration}</span>
        <div className={styles.logoWrapper}>
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className={styles.logo}
          />
        </div>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.title}>
          {experience.title}
          <span className={styles.separator}>·</span>
          <span className={styles.company}>{experience.company}</span>
        </h3>

        <p className={styles.description}>{experience.description}</p>

        {experience.accomplishments.length > 0 && (
          <ul
            className={`${styles.accomplishments} ${
              isHovered ? styles.visible : ""
            }`}
          >
            {experience.accomplishments.map((item, index) => (
              <li key={index}>
                <span className={styles.bullet} />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.technologies}>
          {experience.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        {experience.learnMore && (
          <Link to={experience.learnMore} className={styles.learnMore}>
            Learn more →
          </Link>
        )}
      </div>
    </div>
  );
}

export default Experiences;

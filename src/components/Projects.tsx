import React from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

const projects = [
  {
    id: "0",
    name: "Liquidity Pulse",
    description:
      "A site allowing users to understand macro liquidity metrics, see them on a chart, and ask AI about what they mean.",
    image: "",
    icon: "💧",
    url: "https://liquidity-pulse.vercel.app/",
    technologies: ["Macro Liquidity", "Agentic AI"],
  },
  {
    id: "1",
    name: "Tradebook",
    description:
      "A social layer built on top of Hyperliquid, allowing existing Telegram group chats to trade with each other.",
    image: "images/tradebook.png",
    url: "http://tradebook.work/",
    technologies: ["React", "TypeScript", "DeFi"],
  },
  {
    id: "2",
    name: "MicroStrategy's BTC",
    description:
      "A real-time valuation chart tracking MSTR's market cap vs the net asset value of their BTC holding, click to view the chart and my original analysis.",
    image: "images/mstr-btc.jpg",
    url: "https://ze-codes.github.io/mstr-vs-btc",
    // technologies: ["React", "Chart.js", "API"],
  },
  {
    id: "3",
    name: "Emu Protocol",
    description: "Oracle-less lending protocol design",
    image: "images/emu-protocol.png",
    url: "https://drive.google.com/file/d/126-5O0oUHpILN9bcUs9GUh3bwdc7iDdv/view",
    technologies: ["DeFi Protocol Design"],
  },
  {
    id: "4",
    name: "Safe Partial Liquidation",
    description: "A novel liquidation mechanism for DeFi",
    image: "images/safe-partial-liquidation.png",
    url: "https://drive.google.com/file/d/1ABXtXc69yBKK1x4TOSefHNqFWW4FZ8iX/view",
    technologies: ["DeFi Protocol Design"],
  },
  {
    id: "5",
    name: "De-liquidation Framework",
    description: "Innovative approach to prevent liquidations",
    image: "images/de-liquidation-framework.png",
    url: "https://drive.google.com/file/d/1WRE23ppta0TPbdrcakMKOzh7bQlq2dOp/view",
    technologies: ["DeFi Protocol Design"],
  },
];

function Projects() {
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
        <h1>Projects</h1>
        <p>A collection of projects I've built and research I've done.</p>
      </header>

      <section className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}

interface Project {
  id: string;
  name: string;
  description: string;
  image?: string;
  icon?: string;
  url: string;
  technologies?: string[];
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.name}
              className={styles.image}
            />
            <div className={styles.overlay} />
          </>
        ) : (
          <div className={styles.iconPlaceholder}>
            <span className={styles.iconEmoji}>{project.icon || "📁"}</span>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.name}</h3>
        <div className={styles.descBox}>
          <p className={styles.description}>{project.description}</p>
        </div>
        {project.technologies && project.technologies.length > 0 && (
          <div className={styles.tech}>
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}
        <div className={styles.linkIcon}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default Projects;

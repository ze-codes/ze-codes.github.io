import React from "react";
import { Link } from "react-router-dom";
import styles from "./VestaLearnings.module.css";

function VestaLearnings() {
  return (
    <div className={styles.page}>
      <Link to="/experiences" className={styles.backLink}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Experience
      </Link>

      <header className={styles.header}>
        <img
          src="/images/Vesta Banner.png"
          alt="Vesta Banner"
          className={styles.banner}
        />
        <h1>Vesta Finance</h1>
        <p>
          <a href="https://vesta-app-one.vercel.app/">Vesta Finance</a> was a
          project that I co-founded in 2022.
        </p>
      </header>

      <section className={styles.section}>
        <h2>Before Launch</h2>
        <ul className={styles.list}>
          <li>
            Identified market trend and saw a need for a multi-collateral
            stablecoin
          </li>
          <li>
            Mapped out needed resources for engineering and marketing, recruited
            accordingly
          </li>
          <li>
            Set out a product roadmap for the initial launch taking into
            consideration of the market trend
          </li>
          <li>
            Designed the UI for{" "}
            <a href="https://vesta-app-one.vercel.app/">v1</a> in 1 month
          </li>
          <li>
            Built a lore-driven marketing strategy, gaining 20k Discord members
            and 30k Twitter followers in 3 months organically
          </li>
          <li>
            Networked and raised a{" "}
            <a href="https://medium.com/@VestaFinance/announcing-our-angel-round-a75b25a67a7d">
              $1.5M seed round
            </a>
          </li>
          <li>
            Launched the first product according to plan, reaching $70M in TVL
            in a week, raising $10m from token sale
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>After Launch</h2>
        <ul className={styles.list}>
          <li>
            Scaled the team to 10 people across marketing, engineering, and
            operations
          </li>
          <li>
            Led product effort - built a highly adaptive market roadmap,
            iterating every quarter with hundreds of user research sessions to
            ensure that the product is always aligned with the market trend
          </li>
          <li>
            Led design effort - designed the{" "}
            <a href="https://vesta-app-v2.vercel.app/">v2</a> UI for the Vesta
            app
          </li>
          <li>
            Led business development efforts, drove product defining
            partnerships such as strong deals with Olympus and GMX, directly
            resulting in $1m+ in profits
          </li>
          <li>
            Navigated complex stakeholder landscape of engineering, legal,
            investors and users to implement critical pricing change, achieving
            8x revenue growth while preserving 95% of deposits.
          </li>
          <li>
            Collaborated with the Arbitrum ecosystem strategically, resulting in
            $5M in profits
          </li>
          <li>
            Pioneered the first real-time market-trailing interest rate
            mechanism for a stablecoin, achieving 8x revenue growth while
            preserving 95% of deposits.
          </li>
          <li>
            Pioneered a collateral strategy that returns yield to users,
            resulting in 70% increase in TVL and $500,000 in profits
          </li>
          <li>
            Ultimate sunset resulted in more than $14M in capital back to
            investors, more than $2M than originally raised
          </li>
        </ul>
      </section>
    </div>
  );
}

export default VestaLearnings;

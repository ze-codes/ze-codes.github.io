import React from 'react';
import { Link } from 'react-router-dom';

function VestaLearnings() {
  return (
    <div className="vesta-learnings">
      <h1>Learnings from Vesta</h1>

      <section>
        <h2>What I accomplished</h2>
        <h3>Before launch</h3>
        <ul>
          <li>Identified market trend and saw a need for a multi-collateral stablecoin</li>
          <li>Mapped out needed resources for engineering and marketing, recruited accordingly</li>
          <li>Set out a product roadmap for the initial launch taking into consideration of the market trend</li>
          <li>Created the UI mockup for the first product in 1 month</li>
          <li>Built a lore-driven marketing strategy, gaining 20k Discord members and 30k Twitter followers in 3 months organically</li>
          <li>Networked and raised a <a href="https://medium.com/@VestaFinance/announcing-our-angel-round-a75b25a67a7d">1.5m seed round</a></li>
          <li>Launched the first product according to plan, reaching $70M in TVL in a week, raising $10m from token sale</li>
        </ul>
        <h3>After launch</h3>
        <ul>
          <li>Scaled the team to 10 people across marketing, engineering, and operations</li>
          <li>Led product effort - built a highly adaptive market roadmap, iterating every quarter with hundreds of user research sessions to ensure that the product is always aligned with the market trend</li>
          <li>Led design effort - designed the <a href="https://vestafinance.xyz/">v1</a> and <a href="https://vesta-app-v2.vercel.app/">v2</a> UI for the Vesta app</li>
          <li>Led business development efforts, drove product defining partnerships such as strong deals with <a href="https://curia.vestafinance.xyz/t/passed-olympus-vesta-partnership-formalisation/52">Olympus</a> and <a href="https://curia.vestafinance.xyz/t/passed-glp-collateral-listing/64">GMX</a>, directly resulting in $1m+ in profits</li>
          <li>Navigated complex stakeholder landscape of engineering, legal, investors and users to implement critical pricing change, achieving 8x revenue growth while preserving 95% of deposits.</li>
          <li>Collaborated with the Arbitrum ecosystem strategically, resulting in <a href="https://curia.vestafinance.xyz/t/rfc-proposal-for-utilizing-arb-airdrop-to-foster-growth-and-establish-vesta-as-a-key-player-on-arbitrum/222">$5m in profits</a></li>
          <li>Pioneered the first <a href="https://curia.vestafinance.xyz/t/rfc-new-interest-rate-framework/274">market-aware interest rate mechanism</a> for a stablecoin, navigated complex stakeholder landscape of engineering, legal, investors and users to implement the design, achieving 8x revenue growth while preserving 95% of deposits.</li>
          <li>Pioneered a collateral strategy that returned yield to users<a href="https://curia.vestafinance.xyz/t/passed-glp-collateral-listing/64">rewards program</a> for the users, resulting in a 70% increase in TVL and $500,000 in profits</li>

        </ul>
      </section>

      <section>
        <h2>What I learned</h2>
        <p>TL;DR</p>
        <p>Vesta failed to achieve significant product-market fit due to artificial initial traction from token emissions, misaligned user expectations, and over-reliance on market speculation. Internal challenges included ineffective product development processes and cultural misalignment. Despite these issues, Vesta returned more capital to investors than raised. To read more about what I learned, please refer to my analysis of Vesta's dissolution.</p>
        <h3><a href="https://zespace.notion.site/Why-Vesta-Dissolved-an-Analysis-e54af7f942984a0ca0dc3f44bf5fdba6">What I learned</a></h3>
      </section>
    </div>
  );
}

export default VestaLearnings;
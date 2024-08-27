import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div className="portfolio">
      
      <section>
        <h2>Currently</h2>
        <div className="experience-item">
          <img src={'Question_Mark.svg'} alt="Current Logo" className="company-logo" />
          <div className="experience-details">
            <h3>Could be us!</h3>
            <h4>Currently Exploring opportunities to join like-minded individuals to build something that will change the world. Interested in fintech, AI, and sports software.</h4>

          </div>
        </div>
      </section>

      <section>
        <h2>Previously at...</h2>

        <div className="experience-item">
          <img src={'Vesta Logo.svg'} alt="Vesta Logo" className="company-logo" />
          <div className="experience-details">
            <h3>Vesta Finance</h3>
            <h4>Co-founder</h4>
            <ul>
              <li>Co-founded a stablecoin protocol on Arbitrum, which is Ethereum's leading Layer 2</li>
              <li>Raised <a href="https://medium.com/@VestaFinance/announcing-our-angel-round-a75b25a67a7d">US$11.6m</a></li>
              <li>Reached US$70m in net asset value at peak, consistantly above $20m even in bad market conditiions</li>
              <li>The first stablecoin to have <a href="https://curia.vestafinance.xyz/t/rfc-new-interest-rate-framework/274">market-aware interest rate mechanism</a></li>
              <li>Generated US$6m+ in profits over 1.5 years</li>
              <li>Designed the <a href="https://vestafinance.xyz/">v1</a> and <a href="https://vesta-app-v2.vercel.app/">v2</a> UI for the Vesta app</li>
              <li>Grew Discord and Twitter community <a href="https://x.com/vestafinance">from 0 to 30,000 members in 3 months</a></li>
            </ul>
            <Link to="/vesta-learnings" className="learn-more-button">Learn more</Link>
          </div>
        </div>
        <hr className="experience-divider" />

        <div className="experience-item">
        <img src={'Zapper Logo.svg'} alt="Zapper Logo" className="company-logo" />
          <div className="experience-details">
            <h3>Zapper</h3>
            <h4>Software Engineer & Product Manager</h4>
            <ul>
              <li>Worked as an integration engineer/product manager at Zapper, one of the leading user-facing apps in Ethereum</li>
              <li>Integrated 100+ DeFi protocols into the platform</li>
              <li>Designed the swap feature for the Zapper platform, which did $5B of volume in the first year</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="other-works-defi">
        <h2>Other Published Works</h2>
        <div className="defi-cards">
          <a href="https://drive.google.com/file/d/126-5O0oUHpILN9bcUs9GUh3bwdc7iDdv/view" className="defi-card">
            <img src="/images/emu-protocol.png" alt="Emu Protocol" className="defi-card-image" />
            <div className="defi-card-content">
              <h3>Emu Protocol</h3>
              <p>Oracle-less lending protocol</p>
            </div>
          </a>
          <a href="https://drive.google.com/file/d/1ABXtXc69yBKK1x4TOSefHNqFWW4FZ8iX/view" className="defi-card">
            <img src="/images/safe-partial-liquidation.png" alt="Safe Partial Liquidation" className="defi-card-image" />
            <div className="defi-card-content">
              <h3>Safe Partial Liquidation</h3>
              <p>A novel liquidation mechanism</p>
            </div>
          </a>
          <a href="https://drive.google.com/file/d/1WRE23ppta0TPbdrcakMKOzh7bQlq2dOp/view" className="defi-card">
            <img src="/images/de-liquidation-framework.png" alt="De-liquidation Framework" className="defi-card-image" />
            <div className="defi-card-content">
              <h3>De-liquidation Framework</h3>
              <p>Innovative approach to prevent liquidations</p>
            </div>
          </a>
        </div>
      </section>

    </div>
  );
}

export default Portfolio;
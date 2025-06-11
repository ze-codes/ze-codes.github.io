import React from "react";
import { Link } from "react-router-dom";

function Experiences() {
  return (
    <div className="experience">
      <div className="content-wrapper">
        <section>
          <div className="experience-item">
            <img
              src={"Vesta Logo.svg"}
              alt="Vesta Logo"
              className="company-logo"
            />
            <div className="experience-details">
              <h3>Vesta Finance</h3>
              <h4>Co-founder</h4>
              <ul>
                <li>
                  Co-founded a stablecoin protocol on Arbitrum, which is
                  Ethereum's leading Layer 2
                </li>
                <li>
                  Raised{" "}
                  <a href="https://medium.com/@VestaFinance/announcing-our-angel-round-a75b25a67a7d">
                    US$11.6m
                  </a>
                </li>
                <li>
                  Reached US$70m in net asset value at peak, consistently above
                  $20m even in bad market conditiions
                </li>
                <li>
                  The first stablecoin to have real-time market-trailing
                  interest rate mechanism
                  {/* <a href="https://curia.vestafinance.xyz/t/rfc-new-interest-rate-framework/274"> */}
                </li>
                <li>Generated US$6m+ in profits over 1.5 years</li>
                <li>
                  Designed the{" "}
                  <a href="https://vesta-app-one.vercel.app/">v1</a> and{" "}
                  <a href="https://vesta-app-v2.vercel.app/">v2</a> UI for the
                  Vesta app
                </li>
                <li>
                  Grew Discord and Twitter community{" "}
                  <a href="https://x.com/vestafinance">
                    from 0 to 30,000 members in 3 months
                  </a>
                </li>
              </ul>
              <Link to="/vesta-learnings" className="learn-more-button">
                Learn more
              </Link>
            </div>
          </div>
          <hr className="experience-divider" />

          <div className="experience-item">
            <img
              src={"Zapper Logo.svg"}
              alt="Zapper Logo"
              className="company-logo"
            />
            <div className="experience-details">
              <h3>Zapper</h3>
              <h4>Software Engineer & Product Manager</h4>
              <ul>
                <li>
                  Worked as a full-stack engineer/product manager at Zapper, one
                  of the leading user-facing apps in Ethereum
                </li>
                <li>
                  Integrated 100+ DeFi protocols into the platform, keeping up
                  with the explosive growth of product usage
                </li>
                <li>
                  Designed the swap feature for the Zapper platform, which did
                  $5B of volume in the first year, increasing session length by
                  15% in one month
                </li>
                <li>
                  Led development of an integration framework, decreasing
                  integration time by 40%, accelerating product growth
                </li>
                <li>
                  Spearheaded targeted initiatives to penetrate Chinese market,
                  resulting in 10% DAU increase over two months
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Experiences;

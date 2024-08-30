import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <div className="content-wrapper">
        <section className="other-works-defi">
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
    </div>
  );
}

export default Projects;
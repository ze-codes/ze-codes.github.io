import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { Link } from "react-router-dom";

function Home() {
  const skills = useMemo(
    () => [
      "DeFi Protocol Design",
      "Full-stack Web Development",
      "Product Management",
      "Data-driven Strategy",
      "User Experience Research",
      "User Interface Design",
      "Business Development",
      "Systematic PMF Exploration",
    ],
    []
  );

  const [bubbles, setBubbles] = useState<
    Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      accelerated: boolean;
      initialX: number;
      initialY: number;
    }>
  >([]);
  const skillsWindowRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const animate = useCallback(() => {
    if (skillsWindowRef.current) {
      const { width, height } = skillsWindowRef.current.getBoundingClientRect();
      setBubbles((prevBubbles) =>
        prevBubbles.map((bubble) => {
          let { x, y, vx, vy, accelerated, initialX, initialY } = bubble;

          if (accelerated) {
            x += vx;
            y += vy;
            if (x <= 0 || x >= width - 150) vx = -vx;
            if (y <= 0 || y >= height - 60) vy = -vy;

            vx *= 0.95;
            vy *= 0.95;

            const distanceToInitial = Math.sqrt(
              (x - initialX) ** 2 + (y - initialY) ** 2
            );
            if (
              distanceToInitial < 1 &&
              Math.abs(vx) < 0.1 &&
              Math.abs(vy) < 0.1
            ) {
              accelerated = false;
              x = initialX;
              y = initialY;
              vx = 0;
              vy = 0;
            }
          }

          return { x, y, vx, vy, accelerated, initialX, initialY };
        })
      );
    }
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (skillsWindowRef.current) {
      const { width, height } = skillsWindowRef.current.getBoundingClientRect();
      setBubbles(
        skills.map(() => {
          const x = Math.random() * (width - 150);
          const y = Math.random() * (height - 60);
          return {
            x,
            y,
            vx: 0,
            vy: 0,
            accelerated: false,
            initialX: x,
            initialY: y,
          };
        })
      );
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate, skills]);

  const handleSkillClick = (index: number) => {
    setBubbles((prevBubbles) =>
      prevBubbles.map((bubble, i) => {
        if (i === index) {
          const angle = Math.random() * 2 * Math.PI;
          const speed = 10 + Math.random() * 10; // Faster initial speed
          return {
            ...bubble,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            accelerated: true,
          };
        }
        return bubble;
      })
    );
  };

  return (
    <div className="home">
      <div className="content-wrapper">
        <section className="featured-skills">
          <div className="skills-window" ref={skillsWindowRef}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-bubble"
                style={{
                  transform: `translate(${bubbles[index]?.x}px, ${bubbles[index]?.y}px)`,
                }}
                onClick={() => handleSkillClick(index)}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
        <section className="professional-summary">
          <p>
            Innovative fintech product manager with a proven track record of
            driving 0-1 growth. Combines technical expertise, business acumen,
            and a unique background in professional sports to deliver impactful
            solutions that engage and retain users.
          </p>
          <p>
            Actively exploring new opportunities in fintech, AI, and sports
            software. Hoping to join forward-thinking teams to create impactful
            products.
          </p>
        </section>

        <section className="key-experiences">
          <div className="achievement-grid">
            <Link to="/experiences" className="achievement-item">
              <div className="achievement-number">$11.6M</div>
              <div className="achievement-description">raised</div>
            </Link>
            <Link to="/experiences" className="achievement-item">
              <div className="achievement-number">$70M</div>
              <div className="achievement-description">managed</div>
            </Link>
            <Link to="/experiences" className="achievement-item">
              <div className="achievement-number">$6M</div>
              <div className="achievement-description">
                revenue generated in 2 years
              </div>
            </Link>
          </div>
        </section>

        <section className="cta-buttons">
          <Link to="/experiences" className="cta-button">
            View Experiences
          </Link>
          <Link to="/contact" className="cta-button">
            Contact Me
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Home;

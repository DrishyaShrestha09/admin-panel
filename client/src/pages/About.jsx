import { NavLink } from "react-router-dom";
import Analytics from "../components/Analytics";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <h1>Why Choose Us? </h1>
              <p>
                Expertise: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ducimus voluptas asperiores sapiente, tempore quasi dolorem debitis
              </p>
              <p>
                Customization: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sed harum voluptate ducimus pariatur dolor temporibus iure,
              </p>
              <p>
                Customer-Centric Approach: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <p>
                Affordability: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius veritatis .
              </p>
              <p>
                Reliability: Lorem ipsum dolor sit amet consectetur adipisicing elit.ducimus available 24/7.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};

export default About;

const Home = () => {
  return (
    <>
      <main>
        
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the best crowd funding company</p>
              <h1>Welcome to Sahayatri</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magnam, quos sequi, dolorem dignissimos nobis eius rerum illo debitis nam suscipit tempora eaque facilis.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn ">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero image */}

            <div className="hero-image">
              <img src="/images/home.png" alt="working together"
                width="400"
                height="500"
              />
            </div>

          </div>
        </section>
      </main>
      {/* 2nd section  */}
      
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>projects completed</p>
          </div>
          <div className="div1">
            <h2>10,000+</h2>
            <p>Happy Peoples</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Helpers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>service</p>
          </div>
        </div>
      </section>

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat blanditiis tenetur quia. Est excepturi quasi dolore ipsa ullam eveniet cumque nam! Magni quos mollitia accusamus, quaerat debitis sapiente? Eius, nihil voluptas odit beatae molestias nam voluptate.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

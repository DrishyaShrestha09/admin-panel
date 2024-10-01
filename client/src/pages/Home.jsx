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
              <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn">learn more</button>
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
    </>
  )
}

export default Home

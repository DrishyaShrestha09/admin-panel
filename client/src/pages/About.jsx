const About = () => {
  return (
    <>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <p>Welcome to Sahayatri</p>
          <h1 className="about-title">Why Choose Us?</h1>
          <div className="texts">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deleniti illum vero corporis impedit molestiae
            <br />
            <br />
            recusandae qui blanditiis, ea, doloribus eligendi. Adipisci facilis sed dolore, dicta voluptas unde maxime tempora.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quam pariatur neque maxime magnam ut, ex voluptas nisi
            <br />
            <br />
            sequi ea possimus incidunt saepe amet nihil dolore cum et vel modi Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br />
            <br />
            Sequi consequuntur delectus, quod aperiam ad tenetur ut, quo veniam, iure ea distinctio atque! Deserunt
          </p>
          </div>
          <div className="btn btn-croup">
            <a href="/contact">
              <button className="btn">connect now</button>
            </a>
            <a href="/services">
              <button className="btn secondary-btn">learn more</button>
            </a>
          </div>
          <div className="hero-image">
              <img src="/images/home.png" alt="working together"
                width="400"
                height="500"
              />
            </div>
        </div>
      </section>
    </>
  );
}

export default About;

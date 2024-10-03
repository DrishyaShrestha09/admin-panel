import { useState } from "react"

const Contact = () => {

const[contact, setContact] = useState({
  username: "",
  email: "",
  message: "",
})

// handle input 
const handleInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  setContact({
    ...Contact,
    [name]: value,
  })
};

  return (
    <>
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Contact us</h1>
      </div>

      {/* main c0ntact page */}
      <div className="container grid grid-two-cols">
        <div className="contact-img">
          <img src="/images/support.png" alt="image" />
        </div>

        {/* actual contact content */}
        <section className="section-form">
          <form >
            <div>
              <label htmlFor="username">username</label>
              <input type="text" 
              name="username" 
              id="username" 
              autoComplete="off"
              value={contact.username}
              onChange={handleInput}
              required 

              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input type="email" 
              name="email" 
              id="email" 
              autoComplete="off"
              value={contact.email}
              onChange={handleInput}
              required 
              
              />
            </div>

            <div>
              <label htmlFor="message">message</label>
              <textarea 
              name="message" 
              id="message" 
              autoComplete="off"
              value={contact.message}
              onChange={handleInput}
              required 
              cols="30" 
              rows="10"
              ></textarea>
            </div>

            <div>
              <button type="submit">submit</button>
            </div>
          </form>
        </section>

      </div>
    </section>
    </>
  )
}

export default Contact

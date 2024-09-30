const Register = () => {
  return <>
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src="/images/register.png" alt="registration image" width="500" height="500" />
            </div>
            {/* register form */}
            <div className="registration-form">
              <h1 className="main-heading mb-3">registration form</h1>
              <br />

              <form >
                <div>
                  <label htmlFor="username">username</label>
                  <input type="text" name="username" placeholder="John Doe" id="username" required autoComplete="off" />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input type="email" name="email" placeholder="johndoe@example.com" id="email" required autoComplete="off" />
                </div>
                <div>
                  <label htmlFor="phone">phone</label>
                  <input type="number" name="phone" placeholder="phone" id="phone" required autoComplete="off" />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input type="password" name="password" placeholder="password" id="password" required autoComplete="off" />
                </div>
                  <br />
                  <button type="submit" className="btn btn-submit">Register Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  </>
}

export default Register

import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email:"",
    pasword: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }
  
  

  return (
    <>
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="login-image">
              <img src="/images/login.png" alt="registration image" width="500" height="500" />
            </div>
            {/* register form */}
            <div className="registration-form">
              <h1 className="main-heading mb-3">login form</h1>
              <br />

              <form onSubmit={handleSubmit} >

                <div>
                  <label htmlFor="email">email</label>
                  <input type="email" 
                  name="email" 
                  placeholder="johndoe@example.com" 
                  id="email" 
                  required 
                  autoComplete="off" 
                  value={user.email}
                  onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="password">password</label>
                  <input type="password" 
                  name="password" 
                  placeholder="password" 
                  id="password" 
                  required 
                  autoComplete="off" 
                  value={user.password}
                  onChange={handleInput}
                  />
                </div>

                <br />
                <button type="submit" className="btn btn-submit">Login now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  </>
  )
}

export default Login

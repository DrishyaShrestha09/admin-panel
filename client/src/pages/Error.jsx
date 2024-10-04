/* eslint-disable react/no-unescaped-entities */
// it can alos be named as page not found

import { NavLink } from "react-router-dom"

const Error = () => {
    return (
        <>
            <section id="error-page">
                <div className=" content">
                    <h2 className="header">404</h2>
                    <h4>Oops! This page seems to have wandered off. </h4>
                    <p>
                        Sorry! The page you're searching for isn't here It looks like this link is broken or no longer exists. If you believe there's an issue, feel free to report it, and we'll look into it.
                    </p>
                    <div className="btns">
                        <NavLink to="/">return home</NavLink>
                        <NavLink to="/contact">report problem</NavLink>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Error

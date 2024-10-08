// *----------------------
//* express.Router
// *----------------------

//? In Express.js, express.Router() is a mini Express application without all the server configurations but with the ability to define routes, middleware, and even have its own set of route handlers. It allows you to modularize your routes and middleware to keep your code organized and maintainable.
//* <https://expressjs.com/en/guide/routing.html>
//? Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

// trying stuff

const express = require('express');
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const signupSchema = require('../validators/auth-validator');
const validate = require('../middlewares/validate-middleware')
const loginSchema = require('../validators/auth-validator');

router.route("/").get (authcontrollers.home);
router.route("/register").post( validate(signupSchema), authcontrollers.register);
router.route("/login").post(authcontrollers.login);
router.route("/login").post(validate(loginSchema), authcontrollers.login);
module.exports = router;
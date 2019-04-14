const verify = require('../auth/verify.auth.js');
const jwt = require('../auth/jwt.auth.js')

module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/api/auth/signup', [verify.checkDuplicate], user.signup);

    // user login
    app.post('/api/auth/login', user.login);

    // Retrieve user details
    app.get('/api/me', [jwt.verifyToken], user.userContent);
}
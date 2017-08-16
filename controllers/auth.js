const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    // sub => Subject, iat => Issue at time
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = (req, res, next) => {
    // User has already had theor email and password auth'd
    // We just need to give them a token
    res.send({ token: tokenForUser(req.user) });
};

exports.signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) {
        return res.status(422).json({ error: 'You must provide email and password' });
    }

    // See if a user wth the given email exists
    User.findOne({ email: email }, function(err, existingUser) {

        if(err) { return next(err); }

        // If a user with email does exist, return an error
        if(existingUser) {
            // 422 rsponse means unprocessable request
            return res.status(422).json({ error: 'Email already existed' });
        }

        // If a user with email !exist, create and save user record
        const user = new User({
            email: email,
            password: password
        });

        user.save((err) => {
            if (err) { return next(err); }

            // Respond to request indicating success
            res.json({ token: tokenForUser(user) });
        });
    });
};

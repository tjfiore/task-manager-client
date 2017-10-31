const Auth = require('./controllers/auth');
const Task = require('./controllers/task');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
    app.get('/', requireAuth, function(req, res) {
        res.send({ message: 'Super secret code is ABC123'});
    });

    app.post('/signin', requireSignin, Auth.signin);
    app.post('/signup', Auth.signup);
    app.post('/task', Task.addTask);
    app.get('/task', Task.getTasks);
}

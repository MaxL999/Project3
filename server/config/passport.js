const userSchema = require('./mongoUser');
const bcrypt = require('bcryptjs');
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require('cookie-parser');


module.exports = function (passport) {
    // user authentication strategy
    // done(potential error, potential user data)
    passport.use(
        new LocalStrategy(function (username, password, done) {
            UserSchema.findOne({ username: username }, (err, user) => {
                if (err) throw done(err, false);
                if (!user) return done(null, false);
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw done(err, false);
                    if (result) return done(null, user);
                    else return done(null, false);
                })
            })
        })
    )
    // create user cookie
    passport.serializeUser((user, cb) => {
        cb(null, user.id)
    })
    // take cookie and find user then return user data
    // does not remove cookieParser, just parse serial number and find other user info
    passport.deserializeUser((id, cb) => {
        UserSchema.findOne({ _id: id }, (err, user) => {
            cb(err, user)
        })
    })
}
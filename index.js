exports.password = function (email, password, done) {
    if (!password) {
        return done(null, 'Please enter a password');
    }
    if (password.length < 6) {
        return done(null, 'Password should at least be 6 characters');
    }
    var pass = password.toLowerCase();
    if (pass === email.toLowerCase()) {
        return done(null, 'Password should not be equivalent to your email');
    }
    if (!/[0-9]/.test(password)) {
        return done(null, 'Password should contain at least one number');
    }
    if (!/[a-z]/.test(password)) {
        return done(null, 'Password should contain at one lower case letter');
    }
    if (!/[A-Z]/.test(password)) {
        return done(null, 'Password should contain at one upper case letter');
    }
    done();
};

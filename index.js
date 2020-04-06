exports.password = function (username, email, password, done) {
    if (!password) {
        return done(null, 'Please specify a password.');
    }
    if (!username) {
        return done(null, 'Please enter a username first.');
    }
    if (!email) {
        return done(null, 'Please enter your email first.');
    }
    if (password.length < 6) {
        return done(null, 'Password should at least be 6 characters.');
    }
    var pass = password.toLowerCase();
    if (pass === email.toLowerCase()) {
        return done(null, 'Password should not be equivalent to your email.');
    }
    if (pass === username.toLowerCase()) {
        return done(null, 'Password should not be equivalent to your username.');
    }
    if (!/[0-9]/.test(password)) {
        return done(null, 'Password should contain at least one number.');
    }
    if (!/[a-z]/.test(password)) {
        return done(null, 'Password should contain at least one lower case letter.');
    }
    if (!/[A-Z]/.test(password)) {
        return done(null, 'Password should contain at least one upper case letter.');
    }
    if (!/[`~!@#$%^&*()\-_=+\[{\]}\\|;:'",<.>\/?\s]/.test(password)) {
        return done(null, 'Password should contain at least one special character.');
    }
    done();
};

exports.username = function (username, done) {
    if (!username) {
        return done(null, 'Please specify a username.');
    }
    if (/^.*(\-)\1{1,}.*$/.test(username) || !/^([a-z0-9]{1}[a-z0-9\-]{0,48}[a-z0-9]{1}|[a-z0-9]){1}$/.test(username)) {
        return done(null, 'Username contains invalid characters or in an invalid format.')
    }
    done();
};

exports.email = function (email, done) {
    if (!email) {
        return done(null, 'Please specify your email.');
    }
    var at = email.indexOf('@');
    var dot = email.lastIndexOf('.');
    if (at === -1 || dot === -1 || dot < at) {
        return done(null, 'Email contains invalid characters or in an invalid format.');
    }
    done();
};

var service = require('../services/users');

var Controller = {};

// GET: http://localhost:3000/users
Controller.listUsers = (req, res) => {
    service.listUsers()
        .then((users) => {
            if (users) {
                res.json(users);
            } else {
                res.end('No Users found.');
            }
        })
        .catch((err) => {
            console.log(`Listing Users error: ${err}`);
            res.end('Listing Users error.');
        });
};

// GET: http://localhost:3000/users/:id
Controller.listUser = (req, res) => {
    let userId = req.params.id;
    service.listUser(userId)
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.end('No User found.');
            }
        })
        .catch((err) => {
            console.log(`Listing User error: ${err}`);
            res.end('Listing User error.');
        });
};

// POST: http://localhost:3000/users
Controller.createUser = (req, res) => {
    let userName = req.body.userName;
    let userEmail = req.body.userEmail;
    let userPassword = req.body.userPassword;
    service.createUser({
            USER_NAME: userName,
            EMAIL_ADDRESS: userEmail,
            PASSWORD: userPassword
        })
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.end('User not created.');
            }
        })
        .catch((err) => {
            console.log(`Creating User error: ${err}`);
            res.end('Creating User error.');
        });
};

// PUT: http://localhost:3000/users/:id
Controller.updateUser = (req, res) => {
    let userId = req.params.id;
    let userEmail = req.body.userEmail;
    service.updateUser(userId, { EMAIL_ADDRESS: userEmail })
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.end('User not updated.');
            }
        })
        .catch((err) => {
            console.log(`Updateing User error: ${err}`);
            res.end('Updateing User error.');
        });
};

// DELETE: http://localhost:3000/users/:id
Controller.deleteUser = (req, res) => {
    let userId = req.params.id;
    service.deleteUser(userId)
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.end('User not updated.');
            }
        })
        .catch((err) => {
            console.log(`Updateing User error: ${err}`);
            res.end('Updateing User error.');
        });
};

module.exports = Controller;
/**
 * Created by arlingan on 3/24/2016.
 */

var User = require('../models/user');

module.exports = function(server) {
    server.get('/api/users', function(req, res) {
        User.find(function(err, users) {
            if(err) {
                console.log(err);
                res.send(err);
            }
            console.log(users);
            res.json(users);
        });
    });

    server.get('/api/user/:id', function(req, res) {
        var userId = req.params.id;

        User.findOne({"userName": userId}, function(err, user) {
            if(err) {
                console.log(err);
                res.send(err);
            }
            console.log(user);
            res.json(user);
        });
    });

    server.post('/api/user', function(req, res) {
        var userData = req.body;
        console.log(userData);

        var user = new User(userData);
        user.save(function(err, result) {
            if(err) {
                console.log(err);
                res.send(err);
            }
            console.log(result);
            res.json(result);
        });
    });

    server.delete('/api/user/:id', function(req, res) {
        var userId = req.params.id;

        User.remove({"userName": userId}, function(err, result) {
            if(err) {
                console.log(err);
                res.send(err);
            }
            console.log(result);
            res.json(result);
        });
    });

    server.get('*', function(req, res) {
        res.sendfile('./client/index.html');
    });
}
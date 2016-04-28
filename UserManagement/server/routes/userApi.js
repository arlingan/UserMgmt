/**
 * Created by arlingan on 3/24/2016.
 */

var User = require('./../models/user');

module.exports = function(server) {
    server.get('/api/users', function(req, res) {
        User.find(function(err, users) {
            if(err) res.send(err);
            res.json(users);
        });
    });
    
    server.get('*', function(req, res) {
        res.sendfile('./client/index.html');
    });
}
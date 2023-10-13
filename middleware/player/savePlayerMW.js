/**
 * Using POST params update or save a player to the database
 * If res.locals.player is there, it's an update otherwise this middleware creates an entity
 * Redirects to /team/:teamid after success
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
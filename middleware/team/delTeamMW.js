/**
 * Removes a team from the database, the entity used here is: res.locals.team
 * Redirects to / after delete
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
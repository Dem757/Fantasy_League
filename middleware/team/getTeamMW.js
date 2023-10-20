/**
 * Load a team from the database using the :teamid param
 * The result is saved to res.locals.team
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.team = {
            _id: '2',
            name: 'Liverpool FC',
            league: 'Premier League',
            nation: 'Angol'
        };
        next();
    };
};
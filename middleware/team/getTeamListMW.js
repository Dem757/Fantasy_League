/**
 * Load all team from the database
 * The result is saved to res.locals.teams
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {

        res.locals.teams = [
            {
                _id: '0',
                name: 'Juventus FC',
                league: 'Seria A TIM',
                nation: 'Olasz'
            },
            {
                _id: '1',
                name: 'Real Madrid CF',
                league: 'LaLiga Santander',
                nation: 'Spanyol'
            },
            {
                _id: '2',
                name: 'Liverpool FC',
                league: 'Premier League',
                nation: 'Angol'
            }
        ];
        next();
    };
};
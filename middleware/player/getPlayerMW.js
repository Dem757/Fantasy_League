/**
 * Load a player from the database using the :player param
 * The result is saved to res.locals.teamplayer
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.teamplayer = {
            _id: '0',
            name: 'Szoboszlai Dominik',
            position: 'CM',
            nation: 'Magyar',
            number: '8'
        };
        next();
    };
};
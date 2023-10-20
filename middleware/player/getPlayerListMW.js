/**
 * Load all players from the database
 * The result is saved to res.locals.playerlist
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.playerlist = [
            {
                _id: '0',
                name: 'Szoboszlai Dominik',
                position: 'CM',
                nation: 'Magyar',
                number: '8'
            },
            {
                _id: '1',
                name: 'Mohamed Salah',
                position: 'RW',
                nation: 'Egyiptomi',
                number: '11'
            },
            {
                _id: '2',
                name: 'Darwin Núñez',
                position: 'ST',
                nation: 'Uruguayi',
                number: '9'
            }
        ];
        next();
    };
};
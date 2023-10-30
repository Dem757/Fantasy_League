/**
 * Load all players from the database
 * The result is saved to res.locals.players
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const PlayerModel = requireOption(objectrepository, 'PlayerModel')

    return function (req, res, next) {
        try {
            PlayerModel.find({_team: res.locals.team._id}).exec()
                .then(players => {
                    res.locals.players = players;
                    return next();
                })
                .catch(error => {
                    console.error("Hiba", error);
                    return next(error);
                });
        } catch (error) {
            console.error("Hiba", error);
            return next(error);
        }
    };
};
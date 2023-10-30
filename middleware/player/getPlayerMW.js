/**
 * Load a player from the database using the :player param
 * The result is saved to res.locals.teamplayer
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const PlayerModel = requireOption(objectrepository, 'PlayerModel')

    return function (req, res, next) {
        PlayerModel.findOne({_id: req.params.playerid})
            .then(player => {
                if (!player) {
                    const error = new Error('Player not found');
                    error.status = 404;
                    return Promise.reject(error);
                }

                res.locals.teamplayer = player;
                return next();
            })
            .catch(error => {
                return next(error);
            });
    };
};
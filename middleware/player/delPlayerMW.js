/**
 * Removes a player from the database, the entity used here is: res.locals.player
 * Redirects to /team/:teamid after delete
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const PlayerModel = requireOption(objectrepository, 'PlayerModel')

    return function (req, res, next) {
        PlayerModel.deleteOne({ _id: req.params.playerid })
            .then(result => {
                if (result.deletedCount === 0) {
                    const error = new Error('Player not found');
                    error.status = 404;
                    return Promise.reject(error);
                }
                return res.redirect('/team/' + res.locals.team._id);
            })
            .catch(error => {
                return next(error);
            });
    };
};
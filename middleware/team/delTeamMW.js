/**
 * Removes a team from the database, the entity used here is: res.locals.team
 * Redirects to / after delete
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const TeamModel = requireOption(objectrepository, 'TeamModel');
    const PlayerModel = requireOption(objectrepository, 'PlayerModel')

    return function (req, res, next) {
        PlayerModel.deleteMany({ _team: req.params.teamid })
            .then(() => {
                return TeamModel.deleteOne({ _id: req.params.teamid });
            })
            .then(result => {
                if (result.deletedCount === 0) {
                    const error = new Error('Team not found');
                    error.status = 404;
                    return Promise.reject(error);
                }
                return res.redirect('/');
            })
            .catch(error => {
                return next(error);
            });
    };
};
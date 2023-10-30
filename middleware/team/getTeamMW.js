/**
 * Load a team from the database using the :teamid param
 * The result is saved to res.locals.team
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const TeamModel = requireOption(objectrepository, 'TeamModel');

    return function (req, res, next) {
        TeamModel.findOne({_id: req.params.teamid})
            .then(team => {
                if (!team) {
                    const error = new Error('Team not found');
                    error.status = 404;
                    return Promise.reject(error);
                }

                res.locals.team = team;
                return next();
            })
            .catch(error => {
                return next(error);
            });
    };
};
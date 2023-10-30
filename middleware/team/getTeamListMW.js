/**
 * Load all team from the database
 * The result is saved to res.locals.teams
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const TeamModel = requireOption(objectrepository, 'TeamModel');

    return function (req, res, next) {
        try {
            TeamModel.find({}).exec()
                .then(teams => {
                    res.locals.teams = teams;
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
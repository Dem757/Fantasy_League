/**
 * Using POST params update or save a team to the database
 * If res.locals.team is there, it's an update otherwise this middleware creates an entity
 * Redirects to / after success
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const TeamModel = requireOption(objectrepository, 'TeamModel');

    return function (req, res, next) {
        const { name, league, nation } = req.body;

        if (name === undefined || league === undefined || nation === undefined) {
            return next();
        }

        if (typeof res.locals.team === 'undefined') {
            res.locals.team = new TeamModel();
        }

        res.locals.team.name = name;
        res.locals.team.league = league;
        res.locals.team.nation = nation;

        res.locals.team.save()
            .then(() => {
                return res.redirect('/');
            })
            .catch(error => {
                return next(error);
            });
    };
};
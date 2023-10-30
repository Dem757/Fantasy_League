/**
 * Using POST params update or save a player to the database
 * If res.locals.player is there, it's an update otherwise this middleware creates an entity
 * Redirects to /team/:teamid after success
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const PlayerModel = requireOption(objectrepository, 'PlayerModel')

    return function (req, res, next) {
        const { name, position, nation, number } = req.body;
        const current_team_id = res.locals.team._id

        if (name === undefined || position === undefined || nation === undefined || number === undefined) {
            return next();
        }

        if (typeof res.locals.teamplayer === 'undefined') {
            res.locals.teamplayer = new PlayerModel();
        }

        res.locals.teamplayer.name = name;
        res.locals.teamplayer.position = position;
        res.locals.teamplayer.nation = nation;
        res.locals.teamplayer.number = number;
        res.locals.teamplayer._team= current_team_id

        res.locals.teamplayer.save()
            .then(() => {
                return res.redirect('/team/' + current_team_id);
            })
            .catch(error => {
                return next(error);
            });
    };
};
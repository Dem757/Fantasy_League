const renderMW = require('../middleware/renderMW');
const delPlayerMW = require('../middleware/player/delPlayerMW');
const getPlayerListMW = require('../middleware/player/getPlayerListMW');
const getPlayerMW = require('../middleware/player/getPlayerMW');
const savePlayerMW = require('../middleware/player/savePlayerMW');
const delTeamMW = require('../middleware/team/delTeamMW');
const getTeamListMW = require('../middleware/team/getTeamListMW');
const getTeamMW = require('../middleware/team/getTeamMW');
const saveTeamMW = require('../middleware/team/saveTeamMW');

const TeamModel = require('../models/team');
const PlayerModel = require('../models/player');

module.exports = function (app) {
    const objRepo = {
        TeamModel: TeamModel,
        PlayerModel: PlayerModel
    };

    app.use('/new',
        saveTeamMW(objRepo),
        renderMW(objRepo, 'edit_team'));

    app.use('/edit/:teamid',
        getTeamMW(objRepo),
        saveTeamMW(objRepo),
        renderMW(objRepo, 'edit_team'));

    app.get('/del/:teamid',
        getTeamMW(objRepo),
        delTeamMW(objRepo),
        renderMW(objRepo, 'edit_team'));

    app.use('/team/:teamid/new',
        getTeamMW(objRepo),
        savePlayerMW(objRepo),
        renderMW(objRepo, 'edit_player'))

    app.use('/team/:teamid/edit/:playerid',
        getTeamMW(objRepo),
        getPlayerMW(objRepo),
        savePlayerMW(objRepo),
        renderMW(objRepo, 'edit_player'));

    app.get('/team/:teamid/del/:playerid',
        getTeamMW(objRepo),
        getPlayerMW(objRepo),
        delPlayerMW(objRepo),
        renderMW(objRepo, 'edit_player'));

    app.get('/team/:teamid',
        getTeamMW(objRepo),
        getPlayerListMW(objRepo),
        renderMW(objRepo, 'team_view'));

    app.get('/',
        getTeamListMW(objRepo),
        renderMW(objRepo, 'index'));

}
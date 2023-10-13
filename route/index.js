const renderMW = require('../middleware/renderMW');
const delPlayerMW = require('../middleware/player/delPlayerMW');
const getPlayerListMW = require('../middleware/player/getPlayerListMW');
const getPlayerMW = require('../middleware/player/getPlayerMW');
const savePlayerMW = require('../middleware/player/savePlayerMW');
const delTeamMW = require('../middleware/team/delTeamMW');
const getTeamListMW = require('../middleware/team/getTeamListMW');
const getTeamMW = require('../middleware/team/delTeamMW');
const saveTeamMW = require('../middleware/team/saveTeamMW');

module.exports = function (app) {
    const objRepo = {};

    app.get('/',
        getTeamListMW(objRepo),
        renderMW(objRepo, 'teamlist'));

    app.use('/new',
        getTeamMW(objRepo),
        saveTeamMW(objRepo),
        renderMW(objRepo, 'teameditnew'));

    app.use('/edit/:teamid',
        getTeamMW(objRepo),
        saveTeamMW(objRepo),
        renderMW(objRepo, 'teameditnew'));

    app.get('/del/:teamid',
        getTeamMW(objRepo),
        delTeamMW(objRepo),
        renderMW(objRepo, 'teameditnew'));

    app.get('/team/:teamid',
        getTeamMW(objRepo),
        getPlayerListMW(objRepo),
        renderMW(objRepo, 'teamplayerlist'));

    app.use('/team/:teamid/new',
        getTeamMW(objRepo),
        getPlayerMW(objRepo),
        savePlayerMW(objRepo),
        renderMW(objRepo, 'playereditnew'))

    app.use('/team/:teamid/edit/:playerid',
        getTeamMW(objRepo),
        getPlayerMW(objRepo),
        savePlayerMW(objRepo),
        renderMW(objRepo, 'playereditnew'));

    app.get('/team/:teamid/del/:playerid',
        getTeamMW(objRepo),
        getPlayerMW(objRepo),
        delPlayerMW(objRepo),
        renderMW(objRepo, 'playereditnew'));
}
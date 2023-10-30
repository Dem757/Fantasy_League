const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Team = db.model('Team', {
    name: String,
    league: String,
    nation: String
});

module.exports = Team;
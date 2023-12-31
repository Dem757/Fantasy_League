const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Player = db.model('Player', {
    name: String,
    position: String,
    nation: String,
    number: Number,
    _team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }
});

module.exports = Player;
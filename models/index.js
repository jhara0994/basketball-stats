const Player = require('./Player')
const Games = require('./Games')
const Score = require('./Score')

Score.belongsTo(Games, {
    foreignKey: '',
})

Score.belongsTo(Player, {
    foreignKey: 'playerId'
})

module.exports = { Player, Games, Score }
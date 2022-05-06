Games.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNUll: false,
            primaryKey: true,
            autoIncrement: true,
        },
    }
)

module.exports = Games

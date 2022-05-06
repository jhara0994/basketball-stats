Score.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        score: {
            type: DataTypes.INTEGER,
        },
        average: {
            type: DataTypes.INTEGER
        }
    }
)

module.exports = Score
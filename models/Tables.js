const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Tables extends Model { }

Tables.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        table_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        max_size: {
            type: DataTypes.INTEGER,
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        merchant_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'merchant',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tables',
    }
);

module.exports = Tables;

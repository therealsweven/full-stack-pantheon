const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Ticket_items extends Model { }

Ticket_items.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ticket_id: {
            type: DataTypes.INTEGER,
            unique: false,
            references: {
                model: 'ticket',
                key: 'id',
            },
        },
        menu_item_id: {
            type: DataTypes.INTEGER,
            unique: false,
            references: {
                model: 'menu_items',
                key: 'id',
            },
        },
        notes: {
            type: DataTypes.STRING,
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'ticket_items',
    }
);

module.exports = Ticket_items;

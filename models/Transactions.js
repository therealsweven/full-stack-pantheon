// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize model (table) by extending off Sequelize's Model class
class Ticket extends Model { }

Ticket.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        transaction_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: true,
            }
        },
        status_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        approval_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_four: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        entry_method: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        merchnat_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'merchant',
                key: 'id',
            },
        },
        ticket_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'ticket',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'transactions',
    }
);

module.exports = Ticket;

// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize model (table) by extending off Sequelize's Model class
class Ticket extends Model { }

// set up fields and rules for Product model
Ticket.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        order_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        paid: {
            type: DataTypes.BOOLEAN,
        },
        tip_amount: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: true,
            }
        },
        discount: {
            type: DataTypes.DECIMAL,
            validate: {
                isDecimal: true,
            }
        },
        notes: {
            type: DataTypes.STRING,
        },
        merchnat_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'merchnat',
                key: 'id',
            },
        },
        table_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tables',
                key: 'id',
            },
        },
        tab_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'bar_tabs',
                key: 'id',
            },
        },
        merchnat_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'merchnat',
                key: 'id',
            },
        },
        employee_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employee',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ticket',
    }
);

module.exports = Ticket;

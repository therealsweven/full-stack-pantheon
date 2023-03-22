const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Employee extends Model { }

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        login_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_manager: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        merchnat_id: {
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
        modelName: 'employee',
    }
);

module.exports = Employee;

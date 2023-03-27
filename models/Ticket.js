// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

class Ticket extends Model {}

Ticket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    paid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    tip_amount: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      validate: {
        isDecimal: true,
      },
    },
    discount: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      validate: {
        isDecimal: true,
      },
    },
    total: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      validate: {
        isDecimal: true,
      },
    },
    notes: {
      type: DataTypes.STRING,
    },
    table_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tables",
        key: "id",
      },
    },
    bar_tab_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "bar_tabs",
        key: "id",
      },
    },
    merchant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "merchant",
        key: "id",
      },
    },
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "employee",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "ticket",
  }
);

module.exports = Ticket;

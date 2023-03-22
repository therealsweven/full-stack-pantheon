const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Ticket_items extends Model {}

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
      references: {
        model: 'ticket',
        key: 'id',
      },
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'menu_items',
        key: 'id',
      },
    },
    notes: {
        type: DataTypes.STRING,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ticket_items',
  }
);

module.exports = Ticket_items;

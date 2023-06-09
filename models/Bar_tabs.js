const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Bar_tabs extends Model {}

Bar_tabs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tab_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    card_autorized: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    card_last_four: {
      type: DataTypes.STRING,
    },
    merchant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "merchant",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "bar_tabs",
  }
);

module.exports = Bar_tabs;

const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Menu_item_allergens extends Model {}

Menu_item_allergens.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    allergen_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "allergens",
        key: "id",
      },
    },
    menu_item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "menu_items",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "menu_item_allergens",
  }
);

module.exports = Menu_item_allergens;

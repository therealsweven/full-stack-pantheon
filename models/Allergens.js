const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Allergens extends Model {}

Allergens.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "allergens",
  }
);
module.exports = Allergens;

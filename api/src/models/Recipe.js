const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      summary: { type: DataTypes.TEXT, allowNull: false }, //Resumen del plato
      health_score: { type: DataTypes.INTEGER },
      steps: { type: DataTypes.ARRAY(DataTypes.TEXT) }, //Paso a paso (preparación)
      image: { type: DataTypes.STRING },
    },
    { timestamps: false }
  );
};

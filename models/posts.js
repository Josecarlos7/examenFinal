//Escriba la estructura de la tabla dentro de las llaves
module.exports= function(sequelize, DataTypes){
	return sequelize.define('Posts', {Nombre: DataTypes.STRING,Post: DataTypes.STRING});
}

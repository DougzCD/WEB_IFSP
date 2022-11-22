const Usuario = (sequelize, DataTypes)=>{
    return sequelize.define('Usuario',{
        nome: DataTypes.STRING,
        login: DataTypes.STRING,
        senha: DataTypes.STRING 
    });
}

module.exports = Usuario;
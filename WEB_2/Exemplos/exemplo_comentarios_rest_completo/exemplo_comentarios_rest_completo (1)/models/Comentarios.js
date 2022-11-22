module.exports = (sequelize, DataTypes)=>{
const Comentario = sequelize.define('Comentario',{
        usuario: DataTypes.STRING,
        comentario: DataTypes.STRING 
    }, {});

    return Comentario;
}
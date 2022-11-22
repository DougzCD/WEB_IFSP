module.exports = (sequelize, DataTypes)=>{
const Comentario = sequelize.define('Comentario',{
        usuarioId: DataTypes.INTEGER,
        comentario: DataTypes.STRING 
    }, {});

    //belongsTo
    //belongsToMany
    //hasOne
    //hasMany
    Comentario.associate = (models)=>{
        Comentario.belongsto(models.Usuario, {foreignKey: 'usuarioId'})
    }

    return Comentario;
}
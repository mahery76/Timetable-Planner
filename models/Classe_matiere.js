const { DataTypes } = require('sequelize')
const { sq } = require("../config/db.js");
const add_seq = require('../functions/add_seq.js');
const Classes = require('./Classe.js');
const Matieres = require('./Matiere.js');

const Classe_matieres = sq.define('Classe_matieres',{
    id_classe_matiere: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
}, {
    timestamps: false
})
Classe_matieres.belongsTo(Classes, {foreignKey: 'id_classe'})
Classe_matieres.belongsTo(Matieres, {foreignKey: 'id_matiere'})
add_seq(sq, "classes_matieres_id_seq", Classe_matieres, "id_classe_matiere", "gc");
module.exports = Classe_matieres

const { DataTypes } = require('sequelize')
const { sq } = require("../config/db.js");
const add_seq = require('../functions/add_seq.js');
const Enseignants = require('./Enseignant.js');
const Classes = require('./Classe.js');
const Matieres = require('./Matiere.js');

const Affectations = sq.define('Affectations', {
    id_affectation: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    vh: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vh_restante: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    timestamps: false
})
Matieres.hasMany(Affectations, {foreignKey: 'id_matiere'} )
Classes.hasMany(Affectations, {foreignKey:'id_classe'});
Enseignants.hasMany(Affectations, {foreignKey: {name: 'id_ens', allowNull: true}})

add_seq(sq, "affectations_id_seq", Affectations, "id_affectation", "cgt");

module.exports = Affectations




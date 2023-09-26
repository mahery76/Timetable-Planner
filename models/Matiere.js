const { DataTypes } = require('sequelize')
const { sq } = require("../config/db.js");
const add_seq = require('../functions/add_seq.js');
const Enseignants = require('./Enseignant.js');
const Classes = require('./Classe.js');

const Matieres = sq.define('Matieres', {
    id_matiere: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    nom_matiere: {
        type: DataTypes.STRING,
        allowNull: false
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
Classes.hasMany(Matieres, {foreignKey: {name: 'id_classe', allowNull: true}, onDelete: 'CASCADE'})
Enseignants.hasMany(Matieres, {foreignKey:'id_ens', onDelete: 'CASCADE'});

add_seq(sq, "matieres_id_seq", Matieres, "id_matiere", "c");

module.exports = Matieres




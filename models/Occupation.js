const { DataTypes } = require('sequelize')
const { sq } = require("../config/db.js");
const add_seq = require('../functions/add_seq.js');
const Dispos = require('./Dispo.js');
const Salles = require('./Salle.js');
const Affectations = require('./Affectation.js');


const Occupations = sq.define('Occupations', {
    id_occupation: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    heures_restantes: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true
})
Dispos.hasMany(Occupations, {foreignKey: 'id_ens_cren'})
Salles.hasMany(Occupations, {foreignKey: 'id_salle'})
Affectations.hasMany(Occupations, {foreignKey: 'id_affectation'})

add_seq(sq, "occupations_id_seq", Occupations, "id_occupation", "o");

module.exports = Occupations

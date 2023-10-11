const { DataTypes } = require('sequelize')
const { sq } = require("../config/db.js");
const add_seq = require('../functions/add_seq.js');
const Dispos = require('./Dispo.js');
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
    timestamps: true,
    updatedAt: true,
})
Affectations.hasMany(Occupations, {foreignKey: 'id_affectation'})
Dispos.hasMany(Occupations, {foreignKey: 'id_ens_cren'})

add_seq(sq, "occupations_id_seq", Occupations, "id_occupation", "o");

module.exports = Occupations

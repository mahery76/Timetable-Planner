const { DataTypes } = require('sequelize')
const { sq } = require("../config/db.js");
const add_seq = require('../functions/add_seq.js');
const Creneaus = require('./Creneau.js');
const Enseignants = require('./Enseignant.js');

const Ens_crens = sq.define('Ens_crens', {
    id_ens_cren: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    }
}, {
    timestamps: true
})
Creneaus.hasMany(Ens_crens, { foreignKey: 'id_cren' });
Enseignants.hasMany(Ens_crens, { foreignKey: 'id_ens' });
add_seq(sq, "ens_cren_id_seq", Ens_crens, "id_ens_cren", "ts");
module.exports = Ens_crens

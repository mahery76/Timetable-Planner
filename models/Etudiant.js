const { DataTypes } = require('sequelize');
const { sq } = require("../config/db.js");
const add_seq = require('../functions/add_seq.js');
const Classes = require('./Classe.js');

const Etudiants = sq.define('Etudiants', {
  id_etudiant: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  nom_etudiant: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
  {
    timestamps: true
  }
);
Etudiants.belongsTo(Classes, {foreignKey: 'id_classe'});

add_seq(sq, "etudiants_id_seq", Etudiants, "id_etudiant", "s")

module.exports = Etudiants;
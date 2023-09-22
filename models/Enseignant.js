const { DataTypes } = require('sequelize');
const { sq } = require("../config/db.js");
const add_seq = require('../functions/add_seq.js');

const Enseignants = sq.define('Enseignants', {
  id_ens: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  nom_ens: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url_photo_ens: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  coordonnees: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email_ens: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  taux_hor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  }
},
  {
    timestamps: true
  }
);

add_seq(sq, "enseignants_id_seq", Enseignants, "id_ens", "T")

module.exports = Enseignants;
const { DataTypes } = require('sequelize')
const { sq } = require("../config/db.js");
const add_seq = require('../functions/add_seq.js');
const Etudiants = require('./Etudiant')
const Enseignants = require('./Enseignant')

const Users = sq.define('Users', {
    id_user: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    mdp_user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        timestamps: false
    }
);
Users.belongsTo(Etudiants, {foreignKey: 'id_etudiant'});
Users.belongsTo(Enseignants, {foreignKey: 'id_ens'});

add_seq(sq, "users_id_seq", Users, "id_user", "u");
module.exports = Users

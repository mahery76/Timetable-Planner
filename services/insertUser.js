const Users = require("../models/User")
const { sq } = require("../config/db")

sq.query("ALTER SEQUENCE users_id_seq RESTART WITH 1;")

const insertUser = async () => {

    // delete all records before inserting
    await Users.destroy({ truncate: true, cascade: true })

    const usersdata = [
        ["t1@t1", "t1", "ens"],
        ["t2@t2", "t2", "ens"],
        ["t3@t3", "t3", "ens"],
        ["t4@t4", "t4", "ens"],
        ["t5@t5", "t5", "ens"],
    ]
    const insertOneUser = async (a, b, c, d) => {
        await Users.create({
            email_user: a,
            mdp_user: b,
            role_user: c,
        })
    }
    usersdata.forEach(async (u) => {
        await insertOneUser(u[0], u[1], u[2])
    })
    console.log("user inserted")
}

module.exports = insertUser
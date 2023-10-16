const { sq } = require("../../config/db")
const Users = require("../../models/User")

sq.query("ALTER SEQUENCE users_id_seq RESTART WITH 1;")

const insertUser = async () => {

    // delete all records before inserting
    await Users.destroy({ truncate: true, cascade: true })

    const usersdata = [
        ["t1@t1",  "t1", "ens"],
        ["t2@t2",  "t2", "ens"],
        ["t3@t3",  "t3", "ens"],
        ["t4@t4",  "t4", "ens"],
        ["t5@t5",  "t5", "ens"],
        ["t6@t6",  "t6", "ens"],
        ["t7@t7",  "t7", "ens"], 
        ["t8@t8",  "t8", "ens"], 
        ["t9@t9",  "t9", "ens"], 
        ["t10@t10","t10", "ens"], 
        ["t11@t11","t11", "ens"], 
    ]
    const insertOneUser = async (a, b, c, d) => {
        await Users.create({
            email_user: a,
            mdp_user: b,
            role_user: c,
        })
    }

    // usersdata.forEach(async (u) => {
    //     await insertOneUser(u[0], u[1], u[2])
    // })
    const insertionPromise = usersdata.map(async (u) => {
        await insertOneUser(u[0], u[1], u[2])
    })
    await Promise.all(insertionPromise) 

    console.log("user inserted")
}

module.exports = insertUser
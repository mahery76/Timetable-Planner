const { ens1 } = require("./enseignant.controller");
// ens1.then((data)=> {
//     console.log(data.id_ens)
// })
const creatematiere = async () => {
    const data = await ens1
    console.log(data.id_ens)
}
creatematiere()

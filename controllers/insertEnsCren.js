const { sq } = require("../config/db")
const Ens_crens = require("../models/Ens_cren")

sq.query("ALTER SEQUENCE ens_cren_id_seq RESTART WITH 1;")

const insertEnsCren = async () => {
    await Ens_crens.destroy({ truncate: true, cascade: true })

    // first teacher   lundi mercredi
    await Ens_crens.create({id_cren: "s0001",   id_ens: "t0001",})
    await Ens_crens.create({id_cren: "s0002",   id_ens: "t0001",})
    await Ens_crens.create({id_cren: "s0003",   id_ens: "t0001",})
    await Ens_crens.create({id_cren: "s0004",   id_ens: "t0001",})
    
    await Ens_crens.create({id_cren: "s0009",   id_ens: "t0001",})
    await Ens_crens.create({id_cren: "s0010",   id_ens: "t0001",})
    await Ens_crens.create({id_cren: "s0011",   id_ens: "t0001",})
    await Ens_crens.create({id_cren: "s0012",   id_ens: "t0001",})

  
    // second teacher  mardi mercredi
    await Ens_crens.create({id_cren: "s0005",   id_ens: "t0002",})
    await Ens_crens.create({id_cren: "s0006",   id_ens: "t0002",})
    await Ens_crens.create({id_cren: "s0007",   id_ens: "t0002",})
    await Ens_crens.create({id_cren: "s0008",   id_ens: "t0002",})
    
    await Ens_crens.create({id_cren: "s0009",   id_ens: "t0002",})
    await Ens_crens.create({id_cren: "s0010",   id_ens: "t0002",})
    await Ens_crens.create({id_cren: "s0011",   id_ens: "t0002",})
    await Ens_crens.create({id_cren: "s0012",   id_ens: "t0002",})

  
    // third teacher  mardi jeudi
    await Ens_crens.create({id_cren: "s0005",   id_ens: "t0003",})
    await Ens_crens.create({id_cren: "s0006",   id_ens: "t0003",})
    await Ens_crens.create({id_cren: "s0007",   id_ens: "t0003",})
    await Ens_crens.create({id_cren: "s0008",   id_ens: "t0003",})
    
    await Ens_crens.create({id_cren: "s0013",   id_ens: "t0003",})
    await Ens_crens.create({id_cren: "s0014",   id_ens: "t0003",})
    await Ens_crens.create({id_cren: "s0015",   id_ens: "t0003",})
    await Ens_crens.create({id_cren: "s0016",   id_ens: "t0003",})
   
   
    
    // fourth teacher  jeudi vendredi 
    await Ens_crens.create({id_cren: "s0013",   id_ens: "t0004",})
    await Ens_crens.create({id_cren: "s0014",   id_ens: "t0004",})
    await Ens_crens.create({id_cren: "s0015",   id_ens: "t0004",})
    await Ens_crens.create({id_cren: "s0016",   id_ens: "t0004",})
    
    await Ens_crens.create({id_cren: "s0017",   id_ens: "t0004",})
    await Ens_crens.create({id_cren: "s0018",   id_ens: "t0004",})
    await Ens_crens.create({id_cren: "s0019",   id_ens: "t0004",})
    await Ens_crens.create({id_cren: "s0020",   id_ens: "t0004",})
   
   
    
    // fifth teacher  vendredi samedi
    await Ens_crens.create({id_cren: "s0017",   id_ens: "t0005",})
    await Ens_crens.create({id_cren: "s0018",   id_ens: "t0005",})
    await Ens_crens.create({id_cren: "s0019",   id_ens: "t0005",})
    await Ens_crens.create({id_cren: "s0020",   id_ens: "t0005",})
    
    await Ens_crens.create({id_cren: "s0021",   id_ens: "t0005",})
    await Ens_crens.create({id_cren: "s0022",   id_ens: "t0005",})
    await Ens_crens.create({id_cren: "s0023",   id_ens: "t0005",})
    await Ens_crens.create({id_cren: "s0024",   id_ens: "t0005",})
   
   
    

    console.log('ens cren inserted')
 

}

module.exports = insertEnsCren
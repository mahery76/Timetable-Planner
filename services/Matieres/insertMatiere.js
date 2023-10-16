const {sq} = require("../../config/db")
const Matieres = require("../../models/Matiere")
sq.query("ALTER SEQUENCE matieres_id_seq RESTART WITH 1;")

// Ajout de la matiere automatique 
// a la table matiere si elle n'est pas encore enregistree


const insertMatieres = async () => {
    await Matieres.destroy({ truncate: true, cascade: true })
    const cdata = [                 
        ["Comptabilité"],       //1    
        ["Economie général"],   //2   
        ["Statistique"],        //3        
        ["Français"],           //4        
        ["Bureautique"],        //5                
        ["Algo"],               //6            
        ["Langage C"],          //7            
        ["Réseau"],             //8            
        ["Analyse"],            //9            
        ["RDM"],                //10            
        ["Autocad"],            //11            
        ["Mécanique"],          //12            
        ["Science du sol"],     //13                
        ["Climat"],             //14                
        ["Science animal"],     //15                
        ["Chimie"],             //16                        
    ]       
    const insertOneMatiere = async (a) => {
        await Matieres.create({
            nom_matiere: a,
        })
    }
    cdata.forEach(async(element) => {
        insertOneMatiere(element[0])
    });
    console.log('matiere added')

}
module.exports = insertMatieres

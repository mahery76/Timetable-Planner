const {sq} = require("../../config/db")
const Matieres = require("../../models/Matiere")

// Ajout de la matiere automatique 
// a la table matiere si elle n'est pas encore enregistree


const insertMatieres = async () => {
    sq.query("ALTER SEQUENCE matieres_id_seq RESTART WITH 1;")
    await Matieres.destroy({ truncate: true, cascade: true })
    const cdata = [                 
        ["Comptabilité général"],       //1    
        ["Economie général"],   //2   
        ["Statistique et probabilité"],        //3        
        ["Français"],           //4        
        ["Bureautique"],        //5                
        ["Algorithme en langage Pascal"],               //6            
        ["Langage C"],          //7            
        ["Réseau et télécommunication"],             //8            
        ["Analyse mathématique"],            //9            
        ["Résistance des matériaux"],                //10            
        ["Autocad"],            //11            
        ["Mécanique générale"],          //12            
        ["Science et fértilité du sol"],     //13                
        ["Climat et météo"],             //14                
        ["Science animal et végétal"],     //15                
        ["Chimie minérale"],             //16                        
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

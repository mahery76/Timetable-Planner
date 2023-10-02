const pool = require("../../config/dbpg")
const get_occupations_brute = require("./1_occupation_brute")

// Eviter l'apparition des cours differents dans le meme classe, meme ens, et meme heures 

const get_occupations_course_conflict = async () => {
    const occupationsBrute = await get_occupations_brute();
    const osFiltre = [];

    const isG_C_T_SD_Duplicate = (occupation, osFiltre) => {
        const { id_classe, id_matiere, id_ens, id_cren, jour_cren } = occupation;

        const GCTDuplicateCount = osFiltre.filter((item) => (
            item.id_classe === id_classe &&
            item.id_matiere === id_matiere &&
            item.id_ens === id_ens &&
            item.id_cren !== id_cren &&
            item.jour_cren === jour_cren
        )).length;

        return GCTDuplicateCount >= 2;
    };

    const isGroupeSlotDuplicate = (occupation, osFiltre) => {
        const { id_classe, id_cren } = occupation;

        return osFiltre.some((item) => (
            item.id_classe === id_classe &&
            item.id_cren === id_cren
        ));
    };
    
    for (const occupation of occupationsBrute) {
        if (
        !isG_C_T_SD_Duplicate(occupation, osFiltre) &&
        !isGroupeSlotDuplicate(occupation, osFiltre)
        ) 
        {
            osFiltre.push(occupation);
        }
    }
    return osFiltre;
};

const f = async () => {
    let res = await get_occupations_course_conflict()
    console.table(res)
    await pool.end()
}
f()

module.exports = get_occupations_course_conflict

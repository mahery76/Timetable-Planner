const pool = require("../../config/dbpg")
const get_occupations_brute = require("./1_occupation_brute")

// Eviter l'apparition des cours differents dans le meme classe, meme ens, et meme heures 

const get_occupations_course_conflict = async () => {
    const occupations_brute = await get_occupations_brute()

    // console.table(occupations_brute)
    // console.log('that was the occupations array')

    const os_filtre = [];

    for (let i = 0; i < occupations_brute.length; i++) {
        // VERIFICATION SI LE COUR REPREDRA SUR PLUS DE 2 SLOTS
        let GCT_duplicate = os_filtre.filter((item) => {
            return (
                item.id_classe === occupations_brute[i].id_classe &&
                item.id_matiere === occupations_brute[i].id_matiere &&
                item.id_ens === occupations_brute[i].id_ens &&
                item.id_cren !== occupations_brute[i].id_cren &&
                item.jour_cren === occupations_brute[i].jour_cren
            )
        })
        // console.table(GCT_duplicate)
        let GCT_duplicate_count = GCT_duplicate.length
        // console.table(GCT_duplicate)
        if(GCT_duplicate_count < 2){
            // VERIFICATION MEME GROUPE AU MEME CRENEAU
            let is_Groupe_Slot_Duplicate = false;
            for (let j = 0; j < os_filtre.length; j++) {
                if (
                    occupations_brute[i].id_classe === os_filtre[j].id_classe &&
                    occupations_brute[i].id_cren === os_filtre[j].id_cren
                ) {
                    is_Groupe_Slot_Duplicate = true;
                    break;
                }
            }
            if (!is_Groupe_Slot_Duplicate) {
                os_filtre.push(occupations_brute[i])
            }
        }

    }
    return os_filtre
}
const f = async () => {
    let res = await get_occupations_course_conflict()
    console.table(res)
    await pool.end()
}
f()

module.exports = get_occupations_course_conflict

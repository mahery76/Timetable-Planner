const pool = require("../../config/dbpg")
const get_occupations_brute = require("./1_occupation_brute");
const isGroupeCourseTeacherSlotdayDuplicate = require("./3_isGroupeCourseTeacherSlotdayDuplicate");
const isGroupeSlotDuplicate = require("./4_isGroupeSlotDuplicate");
const isTeacherSlotDuplicate = require("./5_isTeacherSlotDuplicate");

// Eviter l'apparition des cours differents dans le meme classe, meme ens, et meme heures 

const get_occupations_course_conflict = async () => {
    const occupationsBrute = await get_occupations_brute()
    const osFiltre = [];

    for (const occupation of occupationsBrute) {
        if (
            // !isTeacherSlotDuplicate(occupation, osFiltre)&& 
            !isGroupeCourseTeacherSlotdayDuplicate(occupation, osFiltre)&&
            !isGroupeSlotDuplicate(occupation, osFiltre)
        ) {
            osFiltre.push(occupation);
        }
    }

    return osFiltre
}
// const f = async () => {
//     let res = await get_occupations_course_conflict()
//     console.table(res)
//     await pool.end()
// }
// f()

// module.exports = get_occupations_course_conflict

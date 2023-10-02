const isTeacherSlotDuplicate = (occupation, osFiltre) => {
    const {id_matiere, id_ens, id_cren } = occupation;

    const isTSDuplicate = osFiltre.some((item) => (
        item.id_ens === id_ens &&
        item.id_cren === id_cren &&
        item.id_matiere === id_matiere
    ));

    return (isTSDuplicate)
};

module.exports = isTeacherSlotDuplicate; 
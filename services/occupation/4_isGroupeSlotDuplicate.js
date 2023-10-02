const isGroupeSlotDuplicate = (occupation, osFiltre) => {
    const { id_classe, id_cren } = occupation;

    return osFiltre.some((item) => (
        item.id_classe === id_classe &&
        item.id_cren === id_cren
    ));
};
module.exports = isGroupeSlotDuplicate;
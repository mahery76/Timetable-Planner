const isTroncCommun = (occupation, osFiltre) => {
    const {id_matiere, id_ens, id_cren, id_tronc_commun } = occupation;

    const isTroncCommun = osFiltre.some((item) => (
        item.id_matiere === id_matiere &&
        item.id_ens === id_ens &&
        item.id_cren === id_cren &&
        item.id_tronc_commun === id_tronc_commun
    ));

    return (isTroncCommun)
};

module.exports = isTroncCommun; 
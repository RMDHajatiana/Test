function PairProgramming(experiences, mostExperianced) {

    let maxExp1 = Number.NEGATIVE_INFINITY;
    let maxExp2 = Number.NEGATIVE_INFINITY;
    let minExp1 = Number.POSITIVE_INFINITY;
    let minExp2 = Number.POSITIVE_INFINITY;
    let indice1 = null;
    let indice2 = null;
    let indice3 = null;
    let indice4 = null;
    for (let i = 0; i < experiences.length; i++) {
        let valeur = experiences[i];
        if (valeur > maxExp1) {
            maxExp2 = maxExp1;
            indice2 = indice1;
            maxExp1 = valeur;
            indice1 = i;
            mostExperianced = true
        } else if (valeur > maxExp2) {
            maxExp2 = valeur;
            indice2 = i;
        }

        return [indice1, indice2];

    }
    if (valeur < minExp1) {
        minExp2 = minExp1;
        indice3 = indice4;
        minExp1 = valeur;
        indice3 = i;
        mostExperianced = false
    } else if (valeur < minExp2) {
        minExp2 = valeur;
        indice4 = i;
    }
}
return [indice3, indice4];

}





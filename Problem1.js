function IsValidHtml(html) {
    if (typeof html !== 'string') {
        return html + "doit être une chaine de caractère"
    } else {
        const isValid = false
        const balises = html.match(/<[^>]+>/g) || [];
        const pile = [];
        balises.forEach(balise => {
            if (balise[1] !== "/") {
                pile.push(balise);
                isValid = true
            } else {
                const dernierBalise = pile[pile.length - 1];
                if (
                    dernierBalise &&
                    dernierBalise.substring(1) === balises
                ) {
                    pile.pop();
                    isValid = false
                }
            }
        });
        return pile.length === 0 ? isValid + "  Toute les balise sont correctement fermé" : isValid + "  il y a de balise non fermé " + pile;
    }
}
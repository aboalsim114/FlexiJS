export function TableauScript() {
    return {
        cloneTableau: (sourceArr = []) => {
            if (!Array.isArray(sourceArr)) {
                throw new Error("Le paramètre doit être un tableau valide.");
            }
            return [...sourceArr];
        },

        ajouterElement: (targetArr, element) => {
            if (!Array.isArray(targetArr)) {
                throw new Error("Le tableau cible doit être un tableau valide.");
            }
            return [...targetArr, element];
        },

        supprimerElement: (targetArr, index) => {
            if (!Array.isArray(targetArr)) {
                throw new Error("Le tableau cible doit être un tableau valide.");
            }
            if (index < 0 || index >= targetArr.length) {
                throw new Error("L'index est hors limites.");
            }
            return targetArr.filter((_, i) => i !== index);
        },

        fusionnerTableaux: (arr1, arr2) => {
            if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
                throw new Error("Les deux paramètres doivent être des tableaux valides.");
            }
            return [...arr1, ...arr2];
        },

        trouverElement: (arr, predicat) => {
            if (!Array.isArray(arr)) {
                throw new Error("Le premier paramètre doit être un tableau valide.");
            }
            if (typeof predicat !== 'function') {
                throw new Error("Le deuxième paramètre doit être une fonction.");
            }
            return arr.find(predicat);
        },

        filtrerTableau: (arr, predicat) => {
            if (!Array.isArray(arr)) {
                throw new Error("Le premier paramètre doit être un tableau valide.");
            }
            if (typeof predicat !== 'function') {
                throw new Error("Le deuxième paramètre doit être une fonction.");
            }
            return arr.filter(predicat);
        },

        mapperTableau: (arr, transformation) => {
            if (!Array.isArray(arr)) {
                throw new Error("Le premier paramètre doit être un tableau valide.");
            }
            if (typeof transformation !== 'function') {
                throw new Error("Le deuxième paramètre doit être une fonction.");
            }
            return arr.map(transformation);
        },

        reduireTableau: (arr, reducteur, valeurInitiale) => {
            if (!Array.isArray(arr)) {
                throw new Error("Le premier paramètre doit être un tableau valide.");
            }
            if (typeof reducteur !== 'function') {
                throw new Error("Le deuxième paramètre doit être une fonction.");
            }
            return arr.reduce(reducteur, valeurInitiale);
        },

        trierTableau: (arr, comparateur) => {
            if (!Array.isArray(arr)) {
                throw new Error("Le paramètre doit être un tableau valide.");
            }
            return [...arr].sort(comparateur);
        },

        inverserTableau: (arr) => {
            if (!Array.isArray(arr)) {
                throw new Error("Le paramètre doit être un tableau valide.");
            }
            return [...arr].reverse();
        },

        enleverDoublons: (arr) => {
            if (!Array.isArray(arr)) {
                throw new Error("Le paramètre doit être un tableau valide.");
            }
            return [...new Set(arr)];
        },

        remplirTableau: (longueur, valeur) => {
            if (typeof longueur !== 'number' || longueur < 0) {
                throw new Error("La longueur doit être un nombre positif.");
            }
            return Array(longueur).fill(valeur);
        },

        verifierTous: (arr, predicat) => {
            if (!Array.isArray(arr)) {
                throw new Error("Le premier paramètre doit être un tableau valide.");
            }
            if (typeof predicat !== 'function') {
                throw new Error("Le deuxième paramètre doit être une fonction.");
            }
            return arr.every(predicat);
        },

        verifierAuMoinsUn: (arr, predicat) => {
            if (!Array.isArray(arr)) {
                throw new Error("Le premier paramètre doit être un tableau valide.");
            }
            if (typeof predicat !== 'function') {
                throw new Error("Le deuxième paramètre doit être une fonction.");
            }
            return arr.some(predicat);
        }
    };
}
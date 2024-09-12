export function ObjetScript() {
    return {
        cloneObjet: (sourceObj = {}, destObj = {}) => {
            if (typeof sourceObj !== 'object' || sourceObj === null || typeof destObj !== 'object' || destObj === null) {
                throw new Error("Les paramètres doivent être des objets valides.");
            }

            for (let key in sourceObj) {
                if (sourceObj.hasOwnProperty(key)) { 
                    destObj[key] = sourceObj[key];
                }
            }
            return destObj;
        }, 

        addItemToObjet: (targetObj, item) => {
            if (typeof targetObj !== 'object' || targetObj === null) {
                throw new Error("L'objet cible doit être un objet valide.");
            }

            for (let key in item) {
                if (item.hasOwnProperty(key)) {
                    targetObj[key] = item[key];
                }
            }
            return targetObj;
        },

        deleteItemFromObjet: (targetObj, itemKeys) => {
            if (typeof targetObj !== 'object' || targetObj === null) {
                throw new Error("L'objet cible doit être un objet valide.");
            }

            for (let key of itemKeys) {
                if (targetObj.hasOwnProperty(key)) {
                    delete targetObj[key];  
                }
            }

            return targetObj;
        },


        fusionnerObjets: (obj1, obj2) => {
            if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
                throw new Error("Les deux paramètres doivent être des objets valides.");
            }

            const resultat = { ...obj1 };

            for (let key in obj2) {
                if (obj2.hasOwnProperty(key)) {
                    resultat[key] = obj2[key];
                }
            }

            return resultat;
        },



    };
}











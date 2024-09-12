export function ObjetScript() {
    return {
        cloneObjet: (sourceObj = {}, destObj = {}) => {
            if (!isValidObject(sourceObj) || !isValidObject(destObj)) {
                throw new Error("Les paramètres doivent être des objets valides.");
            }
            Object.keys(sourceObj).forEach(key => {
                destObj[key] = sourceObj[key];
            });
            return destObj;
        }, 

        addItemToObjet: (targetObj, item) => {
            if (!isValidObject(targetObj)) {
                throw new Error("L'objet cible doit être un objet valide.");
            }
            Object.assign(targetObj, item);
            return targetObj;
        },

        deleteItemFromObjet: (targetObj, itemKeys) => {
            if (!isValidObject(targetObj)) {
                throw new Error("L'objet cible doit être un objet valide.");
            }
            itemKeys.forEach(key => {
                if (targetObj.hasOwnProperty(key)) {
                    delete targetObj[key];  
                }
            });
            return targetObj;
        },


        fusionnerObjets: (obj1, obj2) => {
            if (!isValidObject(obj1) || !isValidObject(obj2)) {
                throw new Error("Les deux paramètres doivent être des objets valides.");
            }
            return { ...obj1, ...obj2 };
        },
    };
}

function isValidObject(obj) {
    return typeof obj === 'object' && obj !== null;
}


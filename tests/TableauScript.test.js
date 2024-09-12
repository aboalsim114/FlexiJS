import { TableauScript } from '../src/Arrays/TableauScript.js';

describe('TableauScript', () => {
    const {
        cloneTableau,
        ajouterElement,
        supprimerElement,
        fusionnerTableaux,
        trouverElement,
        filtrerTableau,
        mapperTableau,
        reduireTableau,
        trierTableau,
        inverserTableau,
        enleverDoublons,
        remplirTableau,
        verifierTous,
        verifierAuMoinsUn
    } = TableauScript();

    describe('cloneTableau', () => {
        test('devrait cloner correctement un tableau', () => {
            const source = [1, 2, 3];
            const result = cloneTableau(source);
            expect(result).toEqual(source);
            expect(result).not.toBe(source);
        });

        test('devrait lever une erreur si le paramètre n\'est pas un tableau', () => {
            expect(() => cloneTableau(null)).toThrow("Le paramètre doit être un tableau valide.");
        });
    });

    describe('ajouterElement', () => {
        test('devrait ajouter correctement un élément au tableau', () => {
            const target = [1, 2];
            const result = ajouterElement(target, 3);
            expect(result).toEqual([1, 2, 3]);
        });

        test('devrait lever une erreur si le tableau cible n\'est pas valide', () => {
            expect(() => ajouterElement(null, 1)).toThrow("Le tableau cible doit être un tableau valide.");
        });
    });

    describe('supprimerElement', () => {
        test('devrait supprimer correctement un élément du tableau', () => {
            const target = [1, 2, 3];
            const result = supprimerElement(target, 1);
            expect(result).toEqual([1, 3]);
        });

        test('devrait lever une erreur si le tableau cible n\'est pas valide', () => {
            expect(() => supprimerElement(null, 0)).toThrow("Le tableau cible doit être un tableau valide.");
        });

        test('devrait lever une erreur si l\'index est hors limites', () => {
            expect(() => supprimerElement([1, 2], 2)).toThrow("L'index est hors limites.");
        });
    });

    describe('fusionnerTableaux', () => {
        test('devrait fusionner correctement deux tableaux', () => {
            const arr1 = [1, 2];
            const arr2 = [3, 4];
            const result = fusionnerTableaux(arr1, arr2);
            expect(result).toEqual([1, 2, 3, 4]);
        });

        test('devrait lever une erreur si les paramètres ne sont pas des tableaux valides', () => {
            expect(() => fusionnerTableaux(null, [])).toThrow("Les deux paramètres doivent être des tableaux valides.");
            expect(() => fusionnerTableaux([], null)).toThrow("Les deux paramètres doivent être des tableaux valides.");
        });
    });

    describe('trouverElement', () => {
        test('devrait trouver le premier élément qui satisfait le prédicat', () => {
            const arr = [1, 2, 3, 4, 5];
            const result = trouverElement(arr, (x) => x > 3);
            expect(result).toBe(4);
        });

        test('devrait retourner undefined si aucun élément ne satisfait le prédicat', () => {
            const arr = [1, 2, 3];
            const result = trouverElement(arr, (x) => x > 5);
            expect(result).toBeUndefined();
        });

        test('devrait lever une erreur si les paramètres ne sont pas valides', () => {
            expect(() => trouverElement(null, () => {})).toThrow("Le premier paramètre doit être un tableau valide.");
            expect(() => trouverElement([], null)).toThrow("Le deuxième paramètre doit être une fonction.");
        });
    });

    describe('filtrerTableau', () => {
        test('devrait filtrer correctement le tableau', () => {
            const arr = [1, 2, 3, 4, 5];
            const result = filtrerTableau(arr, (x) => x % 2 === 0);
            expect(result).toEqual([2, 4]);
        });

        test('devrait lever une erreur si les paramètres ne sont pas valides', () => {
            expect(() => filtrerTableau(null, () => {})).toThrow("Le premier paramètre doit être un tableau valide.");
            expect(() => filtrerTableau([], null)).toThrow("Le deuxième paramètre doit être une fonction.");
        });
    });

    describe('mapperTableau', () => {
        test('devrait transformer correctement chaque élément du tableau', () => {
            const arr = [1, 2, 3];
            const result = mapperTableau(arr, (x) => x * 2);
            expect(result).toEqual([2, 4, 6]);
        });

        test('devrait lever une erreur si les paramètres ne sont pas valides', () => {
            expect(() => mapperTableau(null, () => {})).toThrow("Le premier paramètre doit être un tableau valide.");
            expect(() => mapperTableau([], null)).toThrow("Le deuxième paramètre doit être une fonction.");
        });
    });

    describe('reduireTableau', () => {
        test('devrait réduire correctement le tableau', () => {
            const arr = [1, 2, 3, 4];
            const result = reduireTableau(arr, (acc, curr) => acc + curr, 0);
            expect(result).toBe(10);
        });

        test('devrait lever une erreur si les paramètres ne sont pas valides', () => {
            expect(() => reduireTableau(null, () => {}, 0)).toThrow("Le premier paramètre doit être un tableau valide.");
            expect(() => reduireTableau([], null, 0)).toThrow("Le deuxième paramètre doit être une fonction.");
        });
    });

    describe('trierTableau', () => {
        test('devrait trier correctement le tableau', () => {
            const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
            const result = trierTableau(arr);
            expect(result).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
        });

        test('devrait trier correctement le tableau avec un comparateur personnalisé', () => {
            const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
            const result = trierTableau(arr, (a, b) => b - a);
            expect(result).toEqual([9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]);
        });

        test('devrait lever une erreur si le paramètre n\'est pas un tableau valide', () => {
            expect(() => trierTableau(null)).toThrow("Le paramètre doit être un tableau valide.");
        });
    });

    describe('inverserTableau', () => {
        test('devrait inverser correctement le tableau', () => {
            const arr = [1, 2, 3, 4, 5];
            const result = inverserTableau(arr);
            expect(result).toEqual([5, 4, 3, 2, 1]);
        });

        test('devrait lever une erreur si le paramètre n\'est pas un tableau valide', () => {
            expect(() => inverserTableau(null)).toThrow("Le paramètre doit être un tableau valide.");
        });
    });

    describe('enleverDoublons', () => {
        test('devrait enlever correctement les doublons du tableau', () => {
            const arr = [1, 2, 2, 3, 4, 4, 5];
            const result = enleverDoublons(arr);
            expect(result).toEqual([1, 2, 3, 4, 5]);
        });

        test('devrait lever une erreur si le paramètre n\'est pas un tableau valide', () => {
            expect(() => enleverDoublons(null)).toThrow("Le paramètre doit être un tableau valide.");
        });
    });

    describe('remplirTableau', () => {
        test('devrait créer un tableau rempli de la valeur spécifiée', () => {
            const result = remplirTableau(3, 'a');
            expect(result).toEqual(['a', 'a', 'a']);
        });

        test('devrait lever une erreur si la longueur n\'est pas un nombre positif', () => {
            expect(() => remplirTableau(-1, 'a')).toThrow("La longueur doit être un nombre positif.");
            expect(() => remplirTableau('3', 'a')).toThrow("La longueur doit être un nombre positif.");
        });
    });

    describe('verifierTous', () => {
        test('devrait retourner true si tous les éléments satisfont le prédicat', () => {
            const arr = [2, 4, 6, 8];
            const result = verifierTous(arr, (x) => x % 2 === 0);
            expect(result).toBe(true);
        });

        test('devrait retourner false si au moins un élément ne satisfait pas le prédicat', () => {
            const arr = [2, 4, 5, 8];
            const result = verifierTous(arr, (x) => x % 2 === 0);
            expect(result).toBe(false);
        });

        test('devrait lever une erreur si les paramètres ne sont pas valides', () => {
            expect(() => verifierTous(null, () => {})).toThrow("Le premier paramètre doit être un tableau valide.");
            expect(() => verifierTous([], null)).toThrow("Le deuxième paramètre doit être une fonction.");
        });
    });

    describe('verifierAuMoinsUn', () => {
        test('devrait retourner true si au moins un élément satisfait le prédicat', () => {
            const arr = [1, 3, 5, 7, 8];
            const result = verifierAuMoinsUn(arr, (x) => x % 2 === 0);
            expect(result).toBe(true);
        });

        test('devrait retourner false si aucun élément ne satisfait le prédicat', () => {
            const arr = [1, 3, 5, 7];
            const result = verifierAuMoinsUn(arr, (x) => x % 2 === 0);
            expect(result).toBe(false);
        });

        test('devrait lever une erreur si les paramètres ne sont pas valides', () => {
            expect(() => verifierAuMoinsUn(null, () => {})).toThrow("Le premier paramètre doit être un tableau valide.");
            expect(() => verifierAuMoinsUn([], null)).toThrow("Le deuxième paramètre doit être une fonction.");
        });
    });
});
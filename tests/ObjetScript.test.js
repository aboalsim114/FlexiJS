import { ObjetScript } from '../src/Objects/ObjetScript.js';

describe('ObjetScript', () => {
  const { cloneObjet, addItemToObjet, deleteItemFromObjet, fusionnerObjets } = ObjetScript();

  describe('cloneObjet', () => {
    test('devrait cloner correctement un objet', () => {
      const source = { a: 1, b: 2 };
      const dest = {};
      const result = cloneObjet(source, dest);
      expect(result).toEqual(source);
      expect(result).not.toBe(source);
    });

    test('devrait lever une erreur si les paramètres ne sont pas des objets', () => {
      expect(() => cloneObjet(null, {})).toThrow("Les paramètres doivent être des objets valides.");
      expect(() => cloneObjet({}, null)).toThrow("Les paramètres doivent être des objets valides.");
    });
  });

  describe('addItemToObjet', () => {
    test('devrait ajouter correctement un item à l\'objet', () => {
      const target = { a: 1 };
      const item = { b: 2 };
      const result = addItemToObjet(target, item);
      expect(result).toEqual({ a: 1, b: 2 });
    });

    test('devrait lever une erreur si l\'objet cible n\'est pas valide', () => {
      expect(() => addItemToObjet(null, {})).toThrow("L'objet cible doit être un objet valide.");
    });
  });

  describe('deleteItemFromObjet', () => {
    test('devrait supprimer correctement les items de l\'objet', () => {
      const target = { a: 1, b: 2, c: 3 };
      const itemKeys = ['a', 'c'];
      const result = deleteItemFromObjet(target, itemKeys);
      expect(result).toEqual({ b: 2 });
    });

    test('devrait lever une erreur si l\'objet cible n\'est pas valide', () => {
      expect(() => deleteItemFromObjet(null, [])).toThrow("L'objet cible doit être un objet valide.");
    });
  });

  describe('fusionnerObjets', () => {

    test('devrait fusionner correctement deux objets', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      const result = fusionnerObjets(obj1, obj2);
      expect(result).toEqual({ a: 1, b: 3, c: 4 });
    });

    test('devrait conserver les objets originaux inchangés', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      fusionnerObjets(obj1, obj2);
      expect(obj1).toEqual({ a: 1, b: 2 });
      expect(obj2).toEqual({ b: 3, c: 4 });
    });

    test('devrait lever une erreur si les paramètres ne sont pas des objets valides', () => {
      expect(() => fusionnerObjets(null, {})).toThrow("Les deux paramètres doivent être des objets valides.");
      expect(() => fusionnerObjets({}, null)).toThrow("Les deux paramètres doivent être des objets valides.");
    });
  });



});
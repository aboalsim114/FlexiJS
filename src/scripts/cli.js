#!/usr/bin/env node

import { Command } from 'commander';
import { ObjetScript } from '../Objects/ObjetScript.js';
import { TableauScript } from '../Arrays/TableauScript.js';

const program = new Command();
const objetScript = ObjetScript();
const tableauScript = TableauScript();

program
    .name('flexijs-cli')
    .description("Une CLI pour interagir avec flexijs-lib")
    .version('1.0.0');

// Commande pour cloner un objet
program.command('clone-objet <source> <dest>')
    .description('Clone un objet source dans un objet destination')
    .action((source, dest) => {
        const sourceObj = JSON.parse(source);
        const destObj = {};
        const result = objetScript.cloneObjet(sourceObj, destObj);
        console.log('Objet cloné :', result);
    });

// Commande pour ajouter un élément à un tableau
program.command('ajouter-element <tableau> <element>')
    .description('Ajoute un élément à un tableau')
    .action((tableau, element) => {
        const targetArr = JSON.parse(tableau);
        const result = tableauScript.ajouterElement(targetArr, JSON.parse(element));
        console.log('Tableau après ajout :', result);
    });

// Commande pour fusionner deux objets
program.command('fusionner-objets <obj1> <obj2>')
    .description('Fusionne deux objets')
    .action((obj1, obj2) => {
        const obj1Parsed = JSON.parse(obj1);
        const obj2Parsed = JSON.parse(obj2);
        const result = objetScript.fusionnerObjets(obj1Parsed, obj2Parsed);
        console.log('Objet fusionné :', result);
    });

// Commande pour fusionner deux tableaux
program.command('fusionner-tableaux <arr1> <arr2>')
    .description('Fusionne deux tableaux')
    .action((arr1, arr2) => {
        const arr1Parsed = JSON.parse(arr1);
        const arr2Parsed = JSON.parse(arr2);
        const result = tableauScript.fusionnerTableaux(arr1Parsed, arr2Parsed);
        console.log('Tableau fusionné :', result);
    });

program.parse(process.argv);

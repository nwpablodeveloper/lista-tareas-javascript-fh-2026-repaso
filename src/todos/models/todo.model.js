// Este archivo va a ser para crear los objetos de la app

import { v4 as uuid } from 'uuid';

export class Todo {
    
    /**
     * 
     * @param {String} descriptcion Descripción de la tarea
     */
    constructor( descriptcion ){
        this.id = uuid();
        this.descriptcion = descriptcion;
        this.done = false;
        this.createdAt = new Date();
    }

}
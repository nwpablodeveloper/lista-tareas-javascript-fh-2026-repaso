// @ts-nocheck

import todoStore, { Filters } from "../../store/todo.store";

let element;
/**
 * 
 * @param {String} elementId 
 */
export const renderPending = ( elementId ) => {

    if( !element )
        element = document.querySelector( elementId)

    if( !elementId )
        throw new Error( `Elemento ${ elementId } not found`);

    element.innerHTML = todoStore.getTodos( Filters.Pending ).length;


}
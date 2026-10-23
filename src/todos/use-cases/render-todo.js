// @ts-nocheck
import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";

let element;

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodo = ( elementId, todos = [] ) => {

    if( !element )
        element = document.querySelector( elementId);

    if( !element )
        throw new Error(`Elemento ${ element } no existe`);

    element.innerHTML = '';

    todos.forEach( todo => {
        element.append( createTodoHTML(todo) );
    });

}
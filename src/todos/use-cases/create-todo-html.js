import { Todo } from "../models/todo.model";

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = ( todo ) => {

    const {  descriptcion, done, id} = todo;
    
    if( !todo ) throw new Error(`El TODO es requerido`);

    const html = `
                <div class="view">
                    <input class="toggle" type="checkbox" ${ done ? 'checked' : ''}>
                    <label>${ descriptcion }</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
                `;

    const liElemento = document.createElement('li');
    liElemento.innerHTML = html;
    liElemento.setAttribute('data-id', id);

    if( todo.done ) 
        liElemento.classList.add('completed');
    
    return liElemento;
}

/* 

             */
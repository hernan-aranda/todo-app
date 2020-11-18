import './styles.css';

import { Todo, TodoList } from './classes'; // Por defecto va a buscar el index.js de ese directorio
import { crearTodoHtml } from './js/componentes'

export const todoList = new TodoList();


//todoList.todos.forEach( todo => crearTodoHtml( todo ) );
todoList.todos.forEach( crearTodoHtml ); // Es lo mismo que la instruccion anterior

console.log(todoList);
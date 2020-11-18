import { Todo } from './todo.class'


export class TodoList {

    constructor() {

        this.cargarLocalStorage();
        
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {
        for( const todo of this.todos ) {
            if( todo.id == id ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify( this.todos ) );

    }

    cargarLocalStorage() {

        this.todos = ( localStorage.getItem( 'todo' ) ) 
                        ? JSON.parse(localStorage.getItem( 'todo' )) 
                        : [];

        /**
         * Como el localStorage no puede almacenar objetos, sino solo strings, lo guardamos como JSON.
         * Al iniciar, recuperamos del localStorage y parseamos esos JSON para recuperar el objeto.
         * Este objeto, sin embargo, ahora no es una instancia de Todo, por lo cual perdio todos sus metodos.
         * Para recuperar sus metodos, utilizo una funcion estatica que me permita crear instancias a partir de un JSON.
         */
        this.todos = this.todos.map( Todo.fromJson );
    }

}
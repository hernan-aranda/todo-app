
// Como esta clase se va a utilizar fuera de este archivo, le incluyo el export
export class Todo {

    static fromJson({ id, tarea, completado, creado }) { // Desestructuracion de argumentos: Toma solo esas llaves del objeto recibido

        const tempTodo = new Todo( tarea );
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor( tarea ) {

        this.tarea = tarea;

        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date();
    }

}
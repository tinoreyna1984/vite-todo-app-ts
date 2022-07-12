import { createContext, useReducer } from "react";
import { TodoState } from '../interfaces/interfaces';
import { todoReducer } from "./todoReducer";

// este tipo es importante para la definición del contexto
// y también para el uso del contexto en otros puntos del app
export type TodoContextProps = {
    todoState: TodoState;
    toggleTodo: ( id: string ) => void;
} 

// el contexto requiere inicialización (al menos un objeto vacío y tipado)
// también requiere tipar el resultado
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps );

// Provider

// nota: definir siempre la interfaz para el tipado correcto de los props
// debe especificarse si se recibirá un elemento o más
interface props {
  children: JSX.Element | JSX.Element[];
}

// estado inicial (es requerido)
const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Recolectar las piedras del infinito',
            completed: false
        },
        {
            id: '2',
            desc: 'Piedra del alma',
            completed: false
        },
    ],
    completed: 0,
    pending: 2
}

// tipar los props desestructurados
export const TodoProvider = ({ children }: props) => {

  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = ( id: string ) => {
    dispatch({ type: 'toggleTodo', payload: { id } })
  }

  return (<TodoContext.Provider value={{ todoState, toggleTodo }}>
    {children}
  </TodoContext.Provider>);
};

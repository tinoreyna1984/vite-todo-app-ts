import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodos = () => {

    const { todoState, toggleTodo } = useContext( TodoContext );
    const { todos } = !!todoState && todoState;

    return {
        todos: todos,
        pendingTodos: !!todos && todos.filter( todo => !todo.completed ).length,
        toggleTodo
    }
}
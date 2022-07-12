import { Todo } from '../interfaces/interfaces'
import { useTodos } from '../hooks/useTodos';

// usar interfaz para tipar los props
interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props) => {

    const { toggleTodo } = useTodos();

    return (
        <li style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : ''
        }}
            onDoubleClick={ () => toggleTodo( todo.id ) }>
           { todo.desc } 
        </li>
    )
}
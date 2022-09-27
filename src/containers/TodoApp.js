import React, {useState} from "react";
import {getTodos} from "../redux/todoSelectors";
import {addTodo, clearCompleted, completeAll, completeTodo, deleteTodo, editTodo} from "../redux/todoActions";
import {connect} from "react-redux";

const TodoApp = ({todos, addTodo, deleteTodo, completeTodo, completeAll, clearCompleted}) => {

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.length) {
            return;
        }
        addTodo({
            text,
            completed: false
        });
        setText('');
    };

    const handleDelete = (id) => {
        deleteTodo({
            id
        });
    };

    const handleComplete = (id) => {
        completeTodo({
            id
        });
    };

    const handleCompleteAll = () => {
        completeAll();
    };

    const handleClearCompleted = () => {
        clearCompleted();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter todo"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                <table style={{border: "1px solid gray", borderCollapse: "collapse"}}>
                    <tr>
                        <th style={{border: "1px solid lightgray", width: "10%"}}>Todo</th>
                        <th style={{border: "1px solid lightgray", width: "10%"}}>Completed</th>
                        <th style={{border: "1px solid lightgray", width: "10%"}}>Actions</th>
                    </tr>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td style={{border: "1px solid lightgray"}}>{todo.text}</td>
                            <td style={{border: "1px solid lightgray"}}>{todo.completed ?
                                <input type="checkbox" checked={true} onChange={() => handleComplete(todo.id)}/> :
                                <input type="checkbox" checked={false} onChange={() => handleComplete(todo.id)}/>}</td>
                            <td style={{border: "1px solid lightgray"}}>
                                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                                <button onClick={() => handleComplete(todo.id)}>Complete</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </ul>
            <button onClick={handleCompleteAll}>Complete All</button>
            <button onClick={handleClearCompleted}>Clear Completed</button>

        </div>
    )
}

const mapStateToProps = state => ({
    todos: getTodos(state)
});

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => dispatch(addTodo(todo)),
        deleteTodo: id => dispatch(deleteTodo(id)),
        completeTodo: id => dispatch(completeTodo(id)),
        completeAll: () => dispatch(completeAll()),
        clearCompleted: () => dispatch(clearCompleted())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

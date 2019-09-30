import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    getStyle = () => {
        // if (this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-trough'
        //     }
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    

    render() {
        const {id,title,completed} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" defaultChecked={completed} onChange={this.props.markComplete.bind(this,id)}/> {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
                </p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    backgroundColor: '#FF0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem;

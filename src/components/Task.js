import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Task extends Component {
    constructor(props) {
        super(props);
    }

    doneTask = () => {
        this.props.doneTask(this.props.task.id);
    }

    deleteTask = () => {
        this.props.deleteTask(this.props.task.id);
    }

    editTask = (e) => {
        e.preventDefault();
        let newTask = this.props.task;
        if (e.target[0].value.length !== 0) {
            newTask.title = e.target[0].value;
            this.props.editTask(newTask);
        }
    }

    render() {
        return (
            <div>
                <div className='task'>
                    <p>{this.props.task.title}</p>

                    <p>
                        {!this.props.task.done ? (
                        <button className='action-btn'
                                onClick={this.doneTask}
                        >
                            done
                        </button>
                    ) : (
                        <button className='action-btn'
                                onClick={this.deleteTask}
                        >
                            delete
                        </button>
                    )}
                    </p>

                    {!this.props.task.done ? (
                        <Link className='edit-link' to={{
                            pathname: `/edit/${this.props.task.id}`,
                            title: this.props.task.title,
                            editTask: this.editTask
                        }}>
                            edit
                        </Link>
                    ) : (
                        <p></p>
                    )}
                </div>
            </div>
        );
    }
}

export default Task;

import React, { Component } from 'react';
import Task from './Task';

class AllTasks extends Component {
    render() {
        let tasks = this.props.tasks.map((task) => {
            return (
                <Task
                    task={task}
                    key={task.id}
                    doneTask={this.props.doneTask}
                    deleteTask={this.props.deleteTask}
                    editTask={this.props.editTask}
                >
                </Task>
            );
        });

        return (
            <div>
                <div className='tasks-container'>
                    {tasks}
                </div>
            </div>
        );
    }
}

export default AllTasks;
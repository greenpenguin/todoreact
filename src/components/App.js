import React from 'react';
import TaskInput from './TaskInput';
import { Switch, Route } from 'react-router-dom';
import Navigation from "./Navigation";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                { id: 0, title: 'Create todo list', done: true },
                { id: 1, title: 'Buy cat food', done: false },
                { id: 2, title: 'FaceTime with Ro', done: false }
            ]

        }
    }

    addTask = task =>{
        this.setState(state => {
            let { tasks } = state;
            tasks.push({
                id: tasks.length !== 0 ? tasks.length : 0,
                title: task,
                done: false
            });
            return tasks;
        });
    };

    doneTask = id =>{
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let { tasks } = state;
            tasks[index].done = true;
            return tasks;
        });
    };

    deleteTask = id =>{
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let { tasks } = state;
            delete tasks[index];
            return tasks;
        });
    };

    editTask = (taskToBeEdited) => {
        let newTasks = this.state.tasks;
        newTasks = newTasks.map(task => {
            if (task.id === taskToBeEdited.id) {
                task.title = taskToBeEdited.title;
            }
            return task;
        });

        this.setState({
            tasks: newTasks
        });
    }

    render() {
        const { tasks } = this.state;
        const activeTasks = tasks.filter(tasks => !tasks.done);
        //const notActiveTask = tasks.filter(tasks => tasks.done);
        return (
            <div className="App">
                <h1 className="top">Active tasks: {activeTasks.length}</h1>

                <Navigation
                          tasks={this.state.tasks}
                          doneTask={this.doneTask}
                          deleteTask={this.deleteTask}
                          editTask={this.editTask}
                >
                </Navigation>

                <TaskInput addTask={this.addTask}></TaskInput>
            </div>
        );
    }
}

export default App;


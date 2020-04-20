import React from 'react';
import {Switch, Route} from 'react-router-dom';
import EditPage from './EditPage.js';
import AllTasks from "./AllTasks";

class Navigation extends React.Component {
    render() {
        return(
            <Switch>
                <Route path='/edit/:id' component={EditPage} />

                <Route exact path='/' render={(props) => {
                    return <AllTasks
                        tasks={this.props.tasks}
                        doneTask={this.props.doneTask}
                        deleteTask={this.props.deleteTask}
                        editTask={this.props.editTask}
                        {...props} />;
                }} />
            </Switch>
        )
    }
}

export default Navigation;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditPage extends Component {
    constructor(props) {
        super(props);
    }

    editTask = (e) => {
        this.props.location.editTask(e);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='task-edit'>
                <form onSubmit={this.editTask}>
                    <input
                        placeholder='Type something here'
                        defaultValue={this.props.location.title}
                    />
                    <button>Update</button>
                </form>
                <Link className='back-link' to='/'>Back</Link>
            </div>
        );
    }
}

export default EditPage;

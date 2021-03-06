import React, { Component } from 'react';
import TaskEditor from '../components/TaskEditor';
import moment from 'moment';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorHidden: true,
        }
        this.handleEditToggle = this.handleEditToggle.bind(this);
    }

    handleEditToggle() {
        this.setState({
            editorHidden: !this.state.editorHidden,
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="card-body">
                    <p>{ this.props.taskData.notes }</p>
                    <p>{ moment(this.props.taskData.dueDate).calendar() }</p>
                    <button onClick={ this.handleEditToggle }>Edit</button>
                    <button onClick={ this.props.taskData.onDelete }>Delete</button>
                </div>
                { this.state.editorHidden ? null : (<TaskEditor taskData={ this.props.taskData } />) }
            </React.Fragment>
        ); 
    }
}

export default Details;


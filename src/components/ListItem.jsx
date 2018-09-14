import React, {Component} from 'react';
import Details from './Details';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailsHidden: true,
            completed: this.props.completed
        }
        this.handleDetailToggle = this.handleDetailToggle.bind(this);
        // this.handleCompleteToggle = this.handleCompleteToggle.bind(this);
    }
    handleDetailToggle() {
        this.setState({
            detailsHidden: !this.state.detailsHidden,
            completed: !this.props.completed
        })
    }
    // handleCompleteToggle() {
    //     this.setState({
    //     })
    // }
    render () {
        let {id, title, notes, dueDate, completed, onClick, onDelete} = this.props;
        return (
            <li key={ id } className="list-group-item">
                <div className="card-header">
                    <button className={"btn " + this.props.completed ? "btn-warning" : "btn-light"} onClick={ onClick }>complete</button>
                    <span className="card-title">{title}</span>
                    <button className="btn btn-dark" onClick={ this.handleDetailToggle }>expand</button>
                </div>
                { this.state.detailsHidden ? null : (<Details taskData={ this.props }/>) }
            </li>
        )
    }
}

export default ListItem;
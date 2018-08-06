import React from 'react';
import './listOfToDo.css';
import {List} from "../list-of-entries/list";

export class ListOfToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textOfEntry: '',
            items: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.setTextOfEntry = this.setTextOfEntry.bind(this);
        this.delete = this.delete.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            textOfEntry: '',
            items: [...this.state.items, this.state.textOfEntry]
        });

    }

    setTextOfEntry(e) {
        this.setState({textOfEntry: e.target.value});
    }

    delete(index) {
        this.setState(prevState => ({
            items: prevState.items.filter(item => item !== index)
        }));
    }

    render() {
        return (
            <div>
                <div id="myDIV" className="header">
                    <input type="text" id="myInput" placeholder="Title..." onChange={(e) => this.setTextOfEntry(e)}
                           value={this.state.textOfEntry}/>
                    <span onClick={(e) => this.handleClick(e)} className="addBtn">Add</span>
                </div>
                <List items={this.state.items} delete={this.delete}/>
            </div>);
    }
}
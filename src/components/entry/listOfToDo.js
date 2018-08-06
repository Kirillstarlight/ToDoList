import React from 'react';
import './entry.css';

export class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textOfEntry: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.setTextOfEntry = this.setTextOfEntry.bind(this);
    }

    handleClick() {
        console.log(this.state.textOfEntry);
    }
    setTextOfEntry(e){
        this.setState({textOfEntry: e.target.value});
    }
    render() {
        return (
            <div id="myDIV" className="header">
                <input type="text" id="myInput" placeholder="Title..." onChange={this.setTextOfEntry}
                       value={this.state.textOfEntry}/>
                <span onClick={this.handleClick} className="addBtn">Add</span>
            </div>);
    }
}
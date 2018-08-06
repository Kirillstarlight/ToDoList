import React from 'react';
import './list.css';

export class List extends React.Component {


    delete(index) {
        this.props.delete(index);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((item, index) => (
                        <div>
                            <li key={index}>
                                {item}
                            </li>
                            <span key={index} onClick={this.delete.bind(this, item)} className="delBtn">
                            x
                            </span>
                        </div>))}
                </ul>
            </div>);
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';
import {spaceInRight} from 'react-magic';
import './index.css';
import {ListOfToDo} from "./components/entry/listOfToDo";


const styles = StyleSheet.create({
    magic: {
        animationName: spaceInRight,
        animationDuration: '1s'
    }
});

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className={css(styles.magic)}>
                    TO DO
                </h1>
                <ListOfToDo/>
            </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
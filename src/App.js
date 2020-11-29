import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";

class App extends Component {
    render() {
        const {classes} = this.props
        
        return (
            <div>
      <header className="App-header">
            </div>
        );
    }
}

const styles = (theme) => ({
    root: {},
});

export default withStyles(styles)(App);

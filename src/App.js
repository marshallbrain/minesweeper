import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Game from "./components/Game";

class App extends Component {
    render() {
        const {classes} = this.props
        
        return (
            <div>
              <Game/>
            </div>
        );
    }
}

const styles = (theme) => ({
    root: {},
});

export default withStyles(styles)(App);

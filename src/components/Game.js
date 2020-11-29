import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import styled from 'styled-components'

class Game extends Component {
    render() {
        const {classes} = this.props
        
        const cellList = []
        
        for (let i = 0; i < 16*16; i++) {
            cellList.push(<Cell key={i}>0</Cell>)
        }
        return (
            <Board className={classes.root}>
                {cellList}
            </Board>
        );
    }
}

const Board = styled.div`
    display: grid;
	grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(16, 1fr);
`;

const Cell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    :before {
        content: "";
        display: block;
        height: 0;
        width: 0;
        padding-bottom: 100%;
    }
`;

const styles = (theme) => ({
    root: {
        maxWidth: 800,
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1rem",
    },
});

export default withStyles(styles)(Game);

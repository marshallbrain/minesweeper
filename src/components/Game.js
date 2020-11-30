import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import styled from 'styled-components'

const width = 30;
const height = 16;

class Game extends Component {
    render() {
        const {classes} = this.props
        
        const cellList = []
        
        for (let i = 0; i < width*height; i++) {
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
    max-width: ${48*width}px;
    display: grid;
	grid-template-columns: repeat(${width}, 1fr);
    grid-template-rows: repeat(${height}, 1fr);
`;

const Cell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    min-width: 24px;
    min-height: 24px;
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
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1rem",
    },
});

export default withStyles(styles)(Game);

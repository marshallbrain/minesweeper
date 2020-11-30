import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import styled from 'styled-components'
import Minesweeper from "../Minesweeper";
import Cell from "./Cell";

const width = 16;
const height = 16;

class Game extends Component {
    
    constructor(props) {
        super(props);
        
        this.minesweeper = new Minesweeper(width, height, 40, [])
        
    }
    
    render() {
        const {classes} = this.props
        
        const cellList = []
        
        let i = 0
        this.minesweeper.grid.forEach((value) => {
            cellList.push(<Cell key={i}>{value}</Cell>)
            i++
        })
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

const styles = (theme) => ({
    root: {
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1rem",
    },
});

export default withStyles(styles)(Game);

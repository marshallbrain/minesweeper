import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import styled from 'styled-components'
import Minesweeper from "../Minesweeper";
import Cell from "./Cell";

const width = 8;
const height = 8;

class Game extends Component {
    
    constructor(props) {
        super(props);
        
        this.minesweeper = new Minesweeper(width, height, 10)
        this.minesweeper.addUpdateCallback(grid => this.setState({grid: grid}))
        
        this.state = {
            grid: this.minesweeper.shownGrid,
        }
        
        
    }
    
    render() {
        const {classes} = this.props
        const cellList = []
        
        const clickCell = (index) => {
            this.minesweeper.revealTile(index)
        }
        
        let i = 0
        this.state.grid.forEach((value) => {
            cellList.push(<Cell key={i} index={i} onClick={clickCell}>{value}</Cell>)
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

import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import styled from "styled-components";

const colorMap = {
    1: "#4a0094",
    2: "#0000a3",
    3: "#009999",
    4: "#52a300",
    5: "#c4b000",
    6: "#b55b00",
    7: "#9e0000",
    8: "#4d4d4d",
    9: "#ffffff",
}

class Cell extends Component {
    render() {
        const {classes, children} = this.props
        
        return (
            <Tile className={classes.root}>
                {(children !== 0) && children}
            </Tile>
        );
    }
}

const Tile = styled.div`
  background-color: ${props => (props.children === "") ? "#999999" : (props.children === 9) ? "#4d4d4d" : "#e6e6e6"};
  color: ${props => colorMap[props.children]};
  font-size: 24px;
  font-weight: bold;
  &:before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    padding-bottom: 100%;
  }
`

const styles = (theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid black",
        minWidth: 24,
        minHeight: 24,
    },
});

export default withStyles(styles)(Cell);

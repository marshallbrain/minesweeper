

class Minesweeper {
    
    constructor(width, height, mineCount, ignore = []) {
        
        this.grid = []
        this.uncoverdGrid = []
        let mineRandom = []
        for (let i = 0; i < width*height; i++) {
            this.grid.push(0)
            this.uncoverdGrid.push("")
            mineRandom.push(i)
        }
        
        ignore.forEach(value => {
            mineRandom.splice(value, 1)
        })
    
        for (let i = 0; i < mineCount; i++) {
            let position = Math.floor(Math.random() * mineRandom.length)
            
            let index = mineRandom[position]
            this.grid[index] = 9
            getSurrounding(index, width, height).forEach(value => {
                if (this.grid[value] !== 9) {
                    this.grid[value] += 1
                }
            })
            
            mineRandom.splice(position, 1)
        }
        
    }
    
}

function getSurrounding(index, width, height) {
    let pos = [index%width, Math.floor(index/width)]
    let neighbors = []
    for (let y = -1; y < 2; y++) {
        for (let x = -1; x < 2; x++) {
            if ((x !== 0 || y !== 0) && 0 <= pos[0]+x && pos[0]+x < width && 0 <= pos[1]+y && pos[1]+y < height) {
                neighbors.push(((y+pos[1])*width)+(x+pos[0]))
            }
        }        
    }
    return neighbors
}

export default Minesweeper

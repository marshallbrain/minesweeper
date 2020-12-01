

class Minesweeper {
    
    constructor(width, height, mineCount) {
        this.width = width
        this.height = height
        this.grid = []
        this.shownGrid = []
        this.started = false
        this.mineCount = mineCount
        this.updateCallback = []
        
        for (let i = 0; i < width*height; i++) {
            this.grid.push(0)
            this.shownGrid.push("")
        }
        
    }
    
    startGame(ignore = []) {
    
        let mineRandom = [...Array(this.grid.length).keys()]
        ignore.forEach(value => {
            mineRandom.splice(value, 1)
        })
    
        for (let i = 0; i < this.mineCount; i++) {
            let position = Math.floor(Math.random() * mineRandom.length)
        
            let index = mineRandom[position]
            this.grid[index] = 9
            getSurrounding(index, this.width, this.height).forEach(value => {
                if (this.grid[value] !== 9) {
                    this.grid[value] += 1
                }
            })
        
            mineRandom.splice(position, 1)
        }
        
        this.started = true
        
    }
    
    revealTile(index) {
        if (!this.started) {
            this.startGame([index, ...getSurrounding(index, this.width, this.height)])
        }
        
        this.shownGrid[index] = this.grid[index]
        
        this.updateCallback.forEach(callback => callback(this.shownGrid))
        
    }
    
    addUpdateCallback(callback) {
        this.updateCallback.push(callback)
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

class RecursiveFill {

    constructor() {

    }

    fill(x, y, colour) {
        if (isValidSquare(x, y, colour)) {
            grid[x][y] = '#367588'

            if (!performanceTest) {
              setTimeout(() => {
                this.fill(x + 1, y, colour);
                this.fill(x - 1, y, colour);
                this.fill(x, y + 1, colour);
                this.fill(x, y - 1, colour);  
              }, 100)
            } else {
              this.fill(x + 1, y, colour);
              this.fill(x - 1, y, colour);
              this.fill(x, y + 1, colour);
              this.fill(x, y - 1, colour);  
            }
          }
    }
}
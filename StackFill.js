class StackFill {

    constructor() {

    }

    async fill(x, y, colour) {
        let stack = [{ x, y, colour }];

        while (stack.length > 0) {
            let current = stack.pop();
            await new Promise(r => setTimeout(r, 10));

            for (let i = 0; i < directions.length; i++) {

                let child = {
                    x: current.x + directions[i][0],
                    y: current.y + directions[i][1],
                    colour
                }
                if (isValidSquare(child.x, child.y, child.colour)) {
                    grid[child.x][child.y] = '#367588'
                    stack.push(child);
                }
            }
        }
        return;
    }
}
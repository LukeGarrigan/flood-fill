class QueueFill {

    async fill(x, y, colour) {
        let queue = [{ x, y, colour }];

        while (queue.length > 0) {
            let current = queue.shift(0);
            if (!performanceTest) await new Promise(r => setTimeout(r, 0.1));

            for (let i = 0; i < directions.length; i++) {

                let child = {
                    x: current.x + directions[i][0],
                    y: current.y + directions[i][1],
                    colour
                }
                if (isValidSquare(child.x, child.y, child.colour)) {
                    grid[child.x][child.y] = '#367588'
                    queue.push(child);
                }
            }
        }
        return;
    }
}
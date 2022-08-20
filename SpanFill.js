class SpanFill {

    constructor() {

    }

    async fill(x, y, colour) {
        let stack = [{ x, y, colour }];

        while (stack.length > 0) {
            let {x, y, colour} = stack.pop();
            
            let lx = x;

            while (isValidSquare(lx, y, colour)) {
                grid[lx][y] = '#367588'
                lx = lx -1;
                await new Promise(r => setTimeout(r, 1));
            }

            let rx = x + 1;
            while (isValidSquare(rx, y, colour)) {
                grid[rx][y] = '#367588'
                rx = rx + 1;
                await new Promise(r => setTimeout(r, 1));

            }
            this.scan(lx, rx - 1, y + 1, stack, colour);

            this.scan(lx, rx - 1, y - 1, stack, colour)
        }
        return;
    }

    scan(lx, rx, y, stack, colour) {
        for (let i = lx; i < rx; i++) {
            if (isValidSquare(i, y, colour)) {
                stack.push({x: i, y: y, colour: colour});
            }
        }
    }
}
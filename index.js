const knightMoves = (start, end) => {
  const possibleMovesX = [1, 2, 2, 1, -1, -2, -2, -1];
  const possibleMovesY = [2, 1, -1, -2, -2, -1, 1, 2];

  const validMove = (x, y) => x >= 0 && y >= 0 && x < 8 && y < 8;

  const queue = [{ x: start[0], y: start[1], path: start }];
  const board = new Array(8).fill(0).map((item) => new Array(8).fill(false));

  while (queue.length > 0) {
    const { x, y, path } = queue.shift();
    if (x === end[0] && y === end[1]) {
      const moves = path.map;
    }
  }
};

// Adapted from the Algorithm Visualizer's BFS and Manhattan-distance A*.
export const comparisonGrid = [
  '...............',
  '.S...#.........',
  '.....#..##.....',
  '.....#.........',
  '.....#......G..',
  '.....#..#......',
  '...#####.###...',
  '...............',
  '...............'
]

function neighbors(node, grid) {
  const { row, col } = node
  return [grid[row - 1]?.[col], grid[row]?.[col + 1], grid[row + 1]?.[col], grid[row]?.[col - 1]]
    .filter(next => next && !next.wall)
}

function tracePath(goal, start) {
  const path = []
  for (let node = goal; node; node = node.previous) path.push(node.id)
  return path.at(-1) === start.id ? path.reverse() : []
}

function breadthFirstSearch(grid, start, goal) {
  const queue = [start]
  const visited = []
  start.seen = true

  for (let index = 0; index < queue.length; index += 1) {
    const current = queue[index]
    visited.push(current.id)
    if (current === goal) break

    for (const next of neighbors(current, grid)) {
      if (next.seen) continue
      next.seen = true
      next.previous = current
      queue.push(next)
    }
  }

  return { visited, path: tracePath(goal, start) }
}

function aStarSearch(grid, start, goal) {
  const distance = (node) => Math.abs(goal.row - node.row) + Math.abs(goal.col - node.col)
  const estimate = (node) => node.cost + distance(node)
  const open = [start]
  const visited = []
  start.cost = 0

  while (open.length) {
    open.sort((first, second) => (
      estimate(first) - estimate(second) || distance(first) - distance(second)
    ))
    const current = open.shift()
    if (current.seen) continue
    current.seen = true
    visited.push(current.id)
    if (current === goal) break

    for (const next of neighbors(current, grid)) {
      const cost = current.cost + 1
      if (next.seen || cost >= next.cost) continue
      next.cost = cost
      next.previous = current
      open.push(next)
    }
  }

  return { visited, path: tracePath(goal, start) }
}

function run(search, layout) {
  const grid = layout.map((line, row) => Array.from(line, (type, col) => ({
    type, row, col, id: row * layout[0].length + col, wall: type === '#',
    cost: Infinity, seen: false, previous: null
  })))
  const nodes = grid.flat()
  const start = nodes.find(node => node.type === 'S')
  const goal = nodes.find(node => node.type === 'G')
  return search(grid, start, goal)
}

export function comparePathfinding(layout = comparisonGrid) {
  return {
    aStar: run(aStarSearch, layout),
    breadthFirst: run(breadthFirstSearch, layout)
  }
}

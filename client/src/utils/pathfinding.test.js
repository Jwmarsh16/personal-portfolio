import assert from 'node:assert/strict'
import test from 'node:test'
import { comparePathfinding, comparisonGrid } from './pathfinding.js'

test('the preset gives both algorithms valid shortest paths and distinct search counts', () => {
  const { aStar, breadthFirst } = comparePathfinding()
  const cells = comparisonGrid.join('')
  const columns = comparisonGrid[0].length

  assert.ok(aStar.visited.length < breadthFirst.visited.length)
  assert.equal(aStar.path.length, breadthFirst.path.length)

  for (const { path, visited } of [aStar, breadthFirst]) {
    assert.equal(path[0], cells.indexOf('S'))
    assert.equal(path.at(-1), cells.indexOf('G'))
    assert.equal(visited.length, new Set(visited).size)
    assert.ok(visited.every(index => cells[index] !== '#'))
    assert.ok(path.every(index => visited.includes(index)))
    for (let i = 1; i < path.length; i += 1) {
      const rowDistance = Math.abs(Math.floor(path[i] / columns) - Math.floor(path[i - 1] / columns))
      const colDistance = Math.abs(path[i] % columns - path[i - 1] % columns)
      assert.equal(rowDistance + colDistance, 1)
    }
  }
})

test('both algorithms report the same known shortest route around a wall', () => {
  const { aStar, breadthFirst } = comparePathfinding(['S#G', '...'])
  assert.deepEqual(aStar.path, [0, 3, 4, 5, 2])
  assert.deepEqual(breadthFirst.path, aStar.path)
})

test('both algorithms report an unreachable destination', () => {
  const { aStar, breadthFirst } = comparePathfinding(['S#G', '###'])
  assert.deepEqual(aStar.path, [])
  assert.deepEqual(breadthFirst.path, [])
  assert.deepEqual(aStar.visited, [0])
  assert.deepEqual(breadthFirst.visited, [0])
})

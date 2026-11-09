import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaPlay } from 'react-icons/fa'
import { comparePathfinding, comparisonGrid } from '../utils/pathfinding'
import '../PathfindingComparison.css'

const algorithms = [
  { key: 'aStar', name: 'A*', description: 'Combines steps taken with distance to the goal.' },
  { key: 'breadthFirst', name: 'Breadth-first search', description: 'Explores all cells one step farther away before moving on.' }
]

const legend = [
  ['start', 'S', 'Start'],
  ['goal', 'G', 'Goal'],
  ['wall', '', 'Wall'],
  ['visited', '', 'Explored'],
  ['route', '', 'Shortest path']
]

function renderBoard(algorithm, result, runNumber) {
  const order = new Map(result?.visited.map((cell, index) => [cell, index]))
  const route = new Set(result?.path)
  const columns = comparisonGrid[0].length

  return (
    <div className="pathfinding-board" key={algorithm.key + runNumber}>
      <h3>{algorithm.name}</h3>
      <p>{algorithm.description}</p>
      <div className="pathfinding-grid" aria-hidden="true" style={{ '--columns': columns }}>
        {comparisonGrid.flatMap((line, row) => Array.from(line, (cell, col) => {
          const id = row * columns + col
          const state = cell === 'S' ? 'start' : cell === 'G' ? 'goal' : cell === '#' ? 'wall'
            : route.has(id) ? 'route' : order.has(id) ? 'visited' : 'open'
          const delay = state === 'route' ? 780 : Math.min(740, (order.get(id) ?? 0) * 9)
          return (
            <span className={'pathfinding-cell pathfinding-cell--' + state} key={id} style={{ '--reveal-delay': delay + 'ms' }}>
              {cell === 'S' || cell === 'G' ? cell : ''}
            </span>
          )
        }))}
      </div>
      <dl className="pathfinding-metrics">
        <div><dt>Nodes visited</dt><dd>{result?.visited.length ?? '—'}</dd></div>
        <div><dt>Path length</dt><dd>{result ? result.path.length - 1 + ' steps' : '—'}</dd></div>
      </dl>
    </div>
  )
}

export default function PathfindingComparison() {
  const [run, setRun] = useState({ number: 0, results: null })

  function compare() {
    const results = comparePathfinding()
    setRun(previous => ({ number: previous.number + 1, results }))
  }

  return (
    <section id="pathfinding" className="pathfinding-section page-width" aria-labelledby="pathfinding-heading">
      <div className="pathfinding-header">
        <div>
          <p className="page-eyebrow">Try a project</p>
          <h2 id="pathfinding-heading" className="section-title">Same maze, two ways through</h2>
          <p>Run both algorithms on the same grid and compare how much of it they explore. Each move costs one step.</p>
        </div>
        <button className="btn" type="button" onClick={compare}>
          <FaPlay aria-hidden="true" /> {run.results ? 'Run again' : 'Run comparison'}
        </button>
      </div>
      <div className="pathfinding-boards">
        {algorithms.map(algorithm => renderBoard(algorithm, run.results?.[algorithm.key], run.number))}
      </div>
      <p className="sr-only" role="status">
        {run.results && (
          'A* visited ' + run.results.aStar.visited.length + ' nodes. Breadth-first search visited ' +
          run.results.breadthFirst.visited.length + ' nodes. Both paths take ' + (run.results.aStar.path.length - 1) + ' steps.'
        )}
      </p>
      <div className="pathfinding-footer">
        <ul className="pathfinding-legend" aria-label="Grid legend">
          {legend.map(([type, marker, label]) => (
            <li key={type}><span className={'pathfinding-cell pathfinding-cell--' + type} aria-hidden="true">{marker}</span>{label}</li>
          ))}
        </ul>
        <Link className="text-link" to="/project/algorithm-visualizer">Algorithm Visualizer case study <FaArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
  )
}

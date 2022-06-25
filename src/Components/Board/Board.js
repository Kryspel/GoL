import './Board.css'

function Board(props){
  const { children, running} = props
  return (
    <div className={`board ${running ? 'running' : ''}`}>
      { children }
    </div>
  )

}

export default Board

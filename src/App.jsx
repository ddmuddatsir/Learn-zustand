import './App.css'
import Column from './component/Column'

function App() {

  return (
    <div className="app">
      <Column state={PLANNED}/>
      <Column state={ONGOING}/>
      <Column state={DONE}/>
    </div>
  )
}

export default App

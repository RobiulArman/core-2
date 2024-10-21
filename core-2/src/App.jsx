
import './App.css'
import Counter from './conter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends'

function App() {
  
  function handleClick(){
    alert('button Click')
  }
  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
     {/*  Event Handelar */}
      <h1>React Core  Concepts-02</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={() => {alert('third Clicked')}}>third</button>
      <button onClick = {() => addToFive(3)}>Four</button>
    </>
  )
}

export default App

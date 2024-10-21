import { useState } from "react"

export default function Counter (){
    // state manegment interesting using react HOOK
    const [count,setcount] = useState(0)

    const handleAdd = () =>{
      const newCount = count + 1;
      setcount(newCount)
    }

    const handleReduce = () =>{
        const newCount = count - 1;
        setcount(newCount)
      }
    return (
        <div style={{border: '2px solid green'}}>
            <h1>Counter: {count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}
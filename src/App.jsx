
import './App.css'
import { useState } from 'react'
function App(props) {
  const [color,setcolor]=useState("#242424");

  return (
    <>
    <div className="body" style={{backgroundColor:color}}>
      <h1>ApS BgChanger Project with react</h1>
    <div className="container" >
     <button className="btn" onClick={()=>setcolor("yellow")} style={{background:"yellow"}}>Yellow</button>
     <button className="btn" onClick={()=>setcolor("green")} style={{background:"green"}}>Green</button>
     <button className="btn" onClick={()=>setcolor("purple")}style={{background:"purple"}}>purple</button>
     <button className="btn" onClick={()=>setcolor("blue")} style={{background:"blue"}}>blue</button>
     <button className="btn" onClick={()=>setcolor("white")} style={{background:"white"}}>white</button>
    </div>
    </div>
    </>
  )
}

export default App


import {useState} from "react"

function App() {
  const [color, setColor] = useState("rgb(226 232 240)")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color,color:"white"}}>
        <p className="text-center">Hello</p>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600" onClick={()=>{setColor("rgb(220 38 38)")}}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600" onClick={()=>{setColor("rgb(22 163 74)")}}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600" onClick={()=>{setColor("rgb(37 99 235)")}}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-600" onClick={()=>{setColor("rgb(147 51 234)")}}>Purple</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-400" onClick={()=>{setColor("rgb(250 204 21)")}}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-cyan-600" onClick={()=>{setColor("rgb(14 116 144)")}}>Cyan</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-400" onClick={()=>{setColor("rgb(251 146 60)")}}>Orange</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-teal-600" onClick={()=>{setColor("rgb(13 148 136)")}}>Teal</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-600" onClick={()=>{setColor("rgb(219 39 119)")}}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-violet-600" onClick={()=>{setColor("rgb(167 139 250)")}}>Violet</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App

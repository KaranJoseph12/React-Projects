import { useState } from "react";
export default function App() {
  const [color, setColor] = useState("green");
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap bg-white rounded-xl px-4 py-1 gap-3">
          <button onClick={()=> setColor("red")} className=" outline-none rounded-xl text-white px-4 py-1 gap-3" style={{backgroundColor:"red"}}>Red</button>

          <button onClick={()=> setColor("blue")} className=" outline-none rounded-xl text-white px-4 py-1 gap-3" style={{backgroundColor:"blue"}}>Blue</button>

          <button onClick={()=> setColor("pink")} className=" outline-none rounded-xl text-white px-4 py-1 gap-3" style={{backgroundColor:"pink"}}>Pink</button>

          <button onClick={()=> setColor("purple")} className=" outline-none rounded-xl text-white px-4 py-1 gap-3" style={{backgroundColor:"purple"}}>Purple</button>
        </div>

      </div>

    </div>
  )

}
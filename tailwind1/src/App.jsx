import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex h-screen  m-0 items-center justify-center'>

        <div className='border-2 h-3/5 rounded-2xl w-80 flex flex-col bg-slate-500'>


          <div className=' rounded-tr-2xl rounded-tl-2xl h-1/4 bg-slate-900'></div>


        </div>

      </div>




    </>
  )
}

export default App

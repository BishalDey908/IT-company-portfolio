import { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import {  HashLoader } from 'react-spinners'



function App() {
  const[loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      

    },2500)
  },[])
  return (
    <>
    {
      loading ? <div className='h-[100vh] w-full bg-black'>
    
    <HashLoader color={"#fb00ff"}
      loading={true}
      // cssOverride={override}
      className=' mx-auto top-[40%]'
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"/>
  
  </div> : <Home />
    }
    
    </>
  )
}

export default App

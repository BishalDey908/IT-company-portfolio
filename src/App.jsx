import { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import {  HashLoader } from 'react-spinners'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LandingPage } from './Components/LandingPage'


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
    

    <BrowserRouter>
      <Routes>
        <Route path='/' element={loading ? <div className='h-[100vh] w-full bg-black'>
    
    <HashLoader color={"#fb00ff"}
      loading={true}
      // cssOverride={override}
      className=' mx-auto top-[40%]'
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"/>
  
  </div> :<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App

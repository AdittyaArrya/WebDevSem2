import React, { useState } from 'react'
import './App.css'
import TopBar from './component/TopBar'
import News from './component/Article'

function App() {

  const [title, setTitle]=useState("Sample Title")
 

  return (
    <>
      <TopBar />
      <News title={title} />
    </>
  )
}

export default App

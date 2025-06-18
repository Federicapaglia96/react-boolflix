
import React from 'react'
import SearchBar from './components/SearchBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Aggiuntidirecente from './pages/aggiuntidirecente'
import Lamialista from './pages/lamialista'
import Originali from './pages/originali'
import SerieTv from './pages/Serietv'
import Film from './pages/film'
import Home from './pages/home'
import { SearchTextProvider } from './contexts/AppContext'



function App() {


  return (
    <>
      <SearchTextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/serietv" element={<SerieTv />} />
              <Route path="/film" element={<Film />} />
              <Route path="/Originali" element={<Originali />} />
              <Route path="/aggiuntidirecente" element={<Aggiuntidirecente />} />
              <Route path="/lamialista" element={<Lamialista />} />
            </Route>
          </Routes>
        </BrowserRouter>
       
      </SearchTextProvider>
    </>
  )
}

export default App

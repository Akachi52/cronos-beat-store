import React from 'react'
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
//
import Home from './pages/home';
import FAQ from './pages/faq';
import Beats from './pages/Beats';
import Contact_us from './pages/contact_us';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
//
import Header from './components/header';
import Footer from './components/footer';
import Sticky_playhead from './components/Sticky_playhead';
import { PlayingContextProvider, playingContext } from './components/currentlyPlaying';
//
import './App.css'


function GetHeadFoot(){
return(
   <>
    <Header />
     <Outlet/>
    <Sticky_playhead/>
    <Footer/>
   </>
)
}
function GetHead(){
   return(
    <> 
     <Header />
     <Outlet/>
     <Sticky_playhead/>
    </>
   )
}

 
function App() {
 return (
 <div>
   <Router>
      <PlayingContextProvider>
         <Routes> 
            <Route element={<GetHeadFoot/>}>
              <Route path='/' element={<Home/>} />        
              <Route path='Contact' element={<Contact_us/>} />
              <Route path='Beats' element={<Beats/>} />
            </Route>

            <Route element={<GetHead/>}>             
               <Route path='FAQ' element={<FAQ/>} />
            </Route> 

            <Route path='Auth' element={<Auth/>} />
            <Route path='Admin' element={<Admin/>} />
         </Routes>  
      </PlayingContextProvider> 
   </Router>
 </div>
 )
}

export default App;
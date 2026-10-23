import React, { useState, useContext, useEffect } from 'react';
//
import TrackBar from '../components/TrackBar';
import BeatsFilterSection from './../components/BeatsFilterSection';
//
import tracks from '../tracks.json'
import { playingContext } from '../components/currentlyPlaying';
//
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages.css';



export default function Beats() {
  const handlePlay = useContext(playingContext)?.handlePlay
  const [small, setSmall] = useState(false)

  useEffect(()=>{
    const handleResize = ()=>{
     if (window.innerWidth< 750){
       setSmall(true)
     }else{
       setSmall(false)
     }
    }
    handleResize()

    window.addEventListener('resize', handleResize)
    return() =>{
      window.removeEventListener('resize', handleResize)
    }
  } ,[])



  return (
    <section className="container-fluid mt-4 pb-5">
      <h2 className="mb-3">Beats</h2>


      <div className="row">
        {small?  <BeatsFilterSection/>:''}

        <div className="col-md-8">
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Type to search beats"
          />

          <div className='border border-black p-3'>
          <div className="d-flex justify-content-between mb-2 text-muted small table-header">
            <span style={{ width: '55%' }}>TITLE</span>
            <span style={{ width: '5%' }}>TIME</span>
            <span style={{ width: '15%' }}>ACTIONS</span>
          </div>


         {tracks.slice(0, 5).map((track, index) => (
           <TrackBar 
             key={index} 
             name={track.name} 
             tempo={track.tempo}
             lenght={track.lenght}
             author={track.author}
             img={track.img} 
             index={index}
             audioSrc={track.audioSrc}

             handlePlay={()=>{handlePlay?.({
                name: track.name, 
                tempo: track.tempo,
                lenght: track.lenght,
                author: track.author,
                img: track.img,
                audioSrc: track.audioSrc,
                genre: track.genre,
                key: track.key
             })}}
           />
         ))}          
        </div>
        </div>

        {small? '':<BeatsFilterSection/>}
      </div>
    </section>
  );
}

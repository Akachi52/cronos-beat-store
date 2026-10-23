import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
//
import TrackBar from '../components/TrackBar';
import Pricing_section from '../components/Pricing_section';
import Faq_component from '../components/Faq_component';
import TrackBarSearch from '../components/TrackBarSearch';
//
import Contact_us from './contact_us';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
//
import tracks from '../tracks.json'
import { playingContext } from '../components/currentlyPlaying';


 
function Home() {

  let [searching, setSearching] = useState(false)
  let [searchResults, setSearchResults] = useState([{}])

  useEffect(()=>{
    console.log('getting tracks')
  },[])

  function handleSearch(e){
   let query =  e.target.value

   if( query != ''){
    setSearching(true)
    let results = tracks.filter((item)=>item.name.toLowerCase().includes(query.toLowerCase()))
    setSearchResults(results)
    //console.log(['1', '2', '3', '4'].reverse().slice(0, 3))
   }else{
    setSearching(false)
    setSearchResults([{}])
   }
  }

  const handlePlay = useContext(playingContext)?.handlePlay


  return (
    <div className="text-black d-flex flex-column min-vh-100" style={{backgroundColor:'#fff'}}>
      <main className="flex-grow-1 px-3 py-5">


        {/* Header & Search */}
        <header className="text-center mb-5 mt-5">
          <div className="container mt-3 mb-2">
            <input
              type="text"
              placeholder="Search music, albums, artists..."
              className="form-control mx-auto w-75"
              onChange={handleSearch}
            />
          </div>
          
          <p className={`mt-3 ${searching ? 'hide' : ''}`}>Discover top beats, buy and connect with the producer directly.</p>
          
          <div className={`bg-black ${searching ? '' : 'hide'} ${searchResults.length>0 ? '' : 'hide'} w-75 px-2 py-2 pt-3 mx-auto`}>
            {searchResults.map((track, index)=>(
             <TrackBarSearch 
             key={index} 
             name={track.name} 
             tempo={track.tempo}
             lenght={track.lenght}
             author={track.author}
             img={track.img}
             index={index}
           />
            ))}
          </div>
        </header>

        {/* Recent Tracks */}
        <section className="mb-5">
          <h3 className="fw-bold mb-4 text-center">RECENT TRACKS</h3>
          <div className="container">

          {/* 
            <TrackBar name="Track 1" index={0}/>
            <TrackBar name="Track 2" index={1}/>
            <TrackBar name="Track 3" index={2}/>
            <TrackBar name="Track 4" index={3}/>
            <TrackBar name="Track 5" index={4}/> 
          */}

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

           <Link to="/beats" className="btn btn-outline-dark mt-3">Browse all beats</Link>
          </div>
        </section>

        {/* Popular Tracks */}
        <section className="mb-5">
          <h3 className="fw-bold mb-4 text-center">POPULAR TRACKS</h3>
          <div className="container">

         {tracks.filter((track)=>track.popular).slice(0, 5).map((track, index) => (
           <TrackBar 
             key={index} 
             name={track.name} 
             tempo={track.tempo}
             lenght={track.lenght}
             author={track.author}
             img={track.img}
             index={index}
             audioSrc={track.audioSrc}
           />
         ))}

            <Link to="/Beats" className="btn btn-outline-dark mt-3">Browse all beats</Link>
          </div>
        </section>

        {/* Pricing */}
        <section className="text-center mb-5">
         <Pricing_section/>
        </section>

        {/* FAQ*/}
        <section className="mb-5 container">
          <Faq_component/>
        </section>

        {/* Contact Form */}
        <Contact_us/>
      </main>
    </div>
  );
}

export default Home;

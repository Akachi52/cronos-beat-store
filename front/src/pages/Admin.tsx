import {useEffect, useState} from 'react'
import AdminTrackbar from '../components/adminTrackbar';

function Admin() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [tempo, setTempo] = useState('');
  const [audioSrc, setAudioSrc] = useState('');

  async function handleUploadBeats(e){
    e.preventDefault();

    const outgoing = {name, author, imageUrl, tempo, audioSrc}
    console.log('coming soon: ', outgoing)
    try{

    }catch(err){

    }
  }

  async function getAllBeats(){
    console.log('coming soon: getallbeats')
    try{

    }catch(err){

    }
  }

  useEffect(()=>{
    console.log('getting analytics...')
    try{

    }catch(err){

    }    
  }, [])


  return (
    <>
     <div className="analytics-disp">
       <h1>Analytics</h1>
       <div className="container">
         <div className="analytics-main">

         </div> 

         <div className="analytics-sub">
           <div className="sub-top">

           </div>
           <div className="sub-bottom">

           </div>
          </div>
       </div>
     </div>

     <div className="actions-container">
     <div className="beats-display">
       <h1>All Beats</h1>
       <div className="beats-container">
        {<AdminTrackbar />}
       </div>
       <button onClick={getAllBeats}>Get All Beats</button>
     </div>

     <div className="beats-creator">
        <h1>Upload Beats</h1>
        <form action="#" onSubmit={handleUploadBeats}>
         <div className="form-group">
           <label>Name</label>
           <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          </div>
          <div className="form-group">
           <label>Author</label>
           <input type='text'
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            required 
          />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input 
              type="file" 
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)} 
              required 
            />
          </div> 
          <div className="form-group">
            <label>Tempo</label>
             <input 
             type="text" 
             value={tempo} 
             onChange={(e) => setTempo(e.target.value)} 
             required 
            />
          </div>
          <div className="form-group">
            <label>Audio src</label>
            <input 
            type="file" 
            value={audioSrc} 
            onChange={(e) => setAudioSrc(e.target.value)} 
            required 
            /> 
          </div>
          <button type="submit">Upload Beat</button>
        </form>
     </div>
     </div>
    </>
  )
}

export default Admin

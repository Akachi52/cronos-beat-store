import React,{} from 'react'

function BeatsFilterSection() {
  return (
    <div className='col-md-4' style={{backgroundColor: 'black', color: 'white'}}>
        <h3>FILTER SECTION</h3>

        <div className="filter">
            <p>genre: </p>

            <div className="checkboxes">
              <input type="checkbox" name="trap" id="" />
              <label htmlFor="trap">Trap</label><br />

              <input type="checkbox" name="hiphop" id="" />
              <label htmlFor="trap">HipHop</label><br />                
            </div>
        </div>

        <div className='filter'>
            <p>mood: </p>
            <div className="checkboxes">
              <input type="checkbox" name="chill" id="" />
              <label htmlFor="chill">Chill</label><br />

              <input type="checkbox" name="lit" id="" />
              <label htmlFor="lit">Lit</label><br />

              <input type="checkbox" name="sad" id="" />
              <label htmlFor="sad">Sad</label><br />                            
            </div>
        </div>

        <div className="filter">
            <p>key: </p>


            {<input list='keys' placeholder={'All'}/>}
            <datalist id='keys'>
              <option value="C Maj"></option>
              <option value="C Min"></option>
              <option value="C# | Db Maj"></option>
              <option value="C# | Db Min"></option>
              <option value="D Maj"></option>
              <option value="D Min"></option>
              <option value="D# | Eb Maj"></option>
              <option value="D# | Eb Min"></option>
              <option value="E Maj"></option>
              <option value="E Min"></option>
              <option value="F Maj"></option>
              <option value="F Min"></option>
              <option value="F# | Gb Maj"></option>
              <option value="F# | Gb Min"></option>
              <option value="G Maj"></option>
              <option value="G Min"></option>
              <option value="G# | Ab Maj"></option>
              <option value="G# | Ab Min"></option>
              <option value="A Maj"></option>
              <option value="A Min"></option>
              <option value="A# | Bb Maj"></option>
              <option value="A# | Bb Min"></option>
              <option value="B Maj"></option>
              <option value="B Min"></option>
            </datalist>

        </div>

        <div className='filter'>
            <p>tempo: </p>
            <div className="checkboxes">
              <input type="checkbox" name="fast" id="" />
              <label htmlFor="fast">Fast</label><br />

              <input type="checkbox" name="mid" id="" />
              <label htmlFor="mid">Mid</label><br />

              <input type="checkbox" name="slow" id="" />
              <label htmlFor="slow">Slow</label><br />                            
            </div>
        </div>
    </div>
  )
}

export default BeatsFilterSection

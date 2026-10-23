import {createContext, ReactNode, useState} from 'react'

interface playingContextType{
    name: string,
    img: string,
    author: string,
    lenght: string,
    tempo: number, 
    audioSrc: string,
    genre: string,
    key: string

    handlePlay: (trackSelected: {})=>void
}
export const playingContext = createContext<playingContextType |undefined>(undefined)




interface playingContextProviderProps{
    children: ReactNode
}
export const PlayingContextProvider = ({children}: playingContextProviderProps)=>{
    const sessionAudioName = String(sessionStorage.getItem('sessionAudioName'))
    const sessionAudioImg = String(sessionStorage.getItem('sessionAudioImg'))
    const sessionAudioAuthor = String(sessionStorage.getItem('sessionAudioAuthor'))
    const sessionAudioLenght = String(sessionStorage.getItem('sessionAudioLenght'))
    const sessionAudioTempo = String(sessionStorage.getItem('sessionAudioTempo'))
    const sessionAudioSrc = String(sessionStorage.getItem('sessionAudioSrc'))
    const sessionAudioGenre = String(sessionStorage.getItem('sessionAudioGenre'))
    const sessionAudioKey = String(sessionStorage.getItem('sessionAudioKey'))


   const[name, setName] = useState(sessionAudioName!='null' ?  sessionAudioName : 'default')
   const[img, setImg] = useState(sessionAudioImg!='null' ?  sessionAudioImg :'/image/sample image.png')
   const[author, setAuthor] = useState(sessionAudioAuthor!='null' ?  sessionAudioAuthor : 'default')
   const[lenght, setLenght] = useState(sessionAudioLenght!='null' ?  sessionAudioLenght : 'default')
   const[tempo, setTempo] = useState(sessionAudioTempo!='null' ?  sessionAudioTempo : 0)
   const[audioSrc, setAudioSrc] = useState(sessionAudioSrc? sessionAudioSrc :'/audio/sample.mp3')
   const [genre, setGenre] = useState(sessionAudioGenre!='null' ?  sessionAudioGenre : 'default')
   const [key, setKey] = useState(sessionAudioKey!='null' ?  sessionAudioKey : 'default')


   function handlePlay(trackSelected: {}){
     setName(trackSelected.name)
     setImg(trackSelected.img)
     setAuthor(trackSelected.author)
     setLenght(trackSelected.lenght)
     setTempo(trackSelected.tempo)
     setAudioSrc(trackSelected.audioSrc)
     setGenre(trackSelected.genre)
     setKey(trackSelected.key)
   }

    return(
        <playingContext.Provider value={{name, img, author, lenght, tempo, audioSrc, genre, key,handlePlay}}>
          {children}
        </playingContext.Provider>
    )
}
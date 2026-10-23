import React, { useRef, useState, useEffect, useContext } from 'react';
import { playingContext } from './currentlyPlaying';


function formatTime(seconds: number | undefined): string {
  if (typeof seconds !== 'number' || isNaN(seconds)) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}


export default function Sticky_playhead() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [display_time, setDisplay_time] = useState(0);
  const [duration, setDuration] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const heartButtonRef = useRef<HTMLButtonElement>(null);

  sessionStorage.setItem("sessionAudioSrc", String(useContext(playingContext)?.audioSrc));
  sessionStorage.setItem("sessionAudioName", String(useContext(playingContext)?.name));
  sessionStorage.setItem("sessionAudioImg", String(useContext(playingContext)?.img));
  sessionStorage.setItem("sessionAudioAuthor", String(useContext(playingContext)?.author));
  sessionStorage.setItem("sessionAudioLenght", String(useContext(playingContext)?.lenght));
  sessionStorage.setItem("sessionAudioTempo", String(useContext(playingContext)?.tempo));
  sessionStorage.setItem("sessionAudioGenre", String(useContext(playingContext)?.genre));
  sessionStorage.setItem("sessionAudioKey", String(useContext(playingContext)?.key));


  const audioSrc = sessionStorage.getItem('sessionAudioSrc')
  const currentName = sessionStorage.getItem('sessionAudioName')
  const currentImg = sessionStorage.getItem('sessionAudioImg')
  const currentAuthor = sessionStorage.getItem('sessionAudioAuthor')
  const currentLenght= sessionStorage.getItem('sessionAudioLenght')
  const currentTempo = Number(sessionStorage.getItem('sessionAudioTempo'))
  const currentGenre = sessionStorage.getItem('sessionAudioGenre')
  const currentKey = sessionStorage.getItem('sessionAudioKey')

  


 {/* load audio */}
  useEffect(() => {
    if (audioRef.current && audioSrc) {
      audioRef.current.load(); // Forces the browser to discard old audio and cache the new stream
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Playback blocked or interrupted:", err));
    }
  }, [audioSrc]);



  {/* playback */}
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (audioRef.current) {
        setDisplay_time(audioRef.current.currentTime);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying, audioSrc]);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
    }
  };
  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10);
    }
  };



  {/* dropdown */}
  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        heartButtonRef.current &&
        !heartButtonRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);



  function handleAddCartPlay(){
    console.log('coming soon from playhead')
  }



  return (
    <div className="bg-black text-white"
      style={{
        position: 'fixed',
        bottom: 0,
        zIndex: 1030,
        borderTop: '1px solid #444',
        borderBottom: '1px solid #fff',
        padding: '0.5rem 1rem',
        width: '100%'
    }}>
      
      <audio ref={audioRef} src={audioSrc} preload="auto" onLoadedMetadata={handleLoadedMetadata}/>

      <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap gap-3">
       
        {/* Left: Track image and info */}
        <div className="d-flex align-items-center gap-3">
          <img
            src={currentImg}
            alt="Track"
            className="rounded"
            width="48"
            height="48"
          />

          <div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{currentName}</div>
            <div style={{ fontSize: '0.75rem', color: '#aaa' }}>Trap | BPM: {currentTempo} | C# Minor</div>
          </div>

        </div>


        {/* Play controls */}
        <div className="d-flex align-items-center gap-3 flex-grow-1 justify-content-center">

          {/* Left Timestamp */}
          <span style={{ fontSize: '0.8rem', minWidth: '35px' }}>
            {formatTime(display_time)}
          </span>

          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-secondary rounded-circle p-1"
              style={{ width: 36, height: 36 }}
              onClick={skipBackward}
              title="skip back 10s"
            >
              <i className="bi bi-rewind-fill"></i>
            </button>

            <button
              className="btn btn-light rounded-circle p-2"
              style={{ width: 40, height: 40 }}
              onClick={togglePlay}
              title="Play / Pause"
            >
              {isPlaying ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>}
            </button>

            <button
              className="btn btn-secondary rounded-circle p-1"
              style={{ width: 36, height: 36 }}
              onClick={skipForward}
              title="skip forward 10s"
            >
              <i className="bi bi-fast-forward-fill"></i>
            </button>
          </div>

          {/* Right Timestamp */}
          <span style={{ fontSize: '0.8rem', minWidth: '35px', textAlign: 'right' }}>
            {formatTime(duration)}
          </span>

        </div>

        {/* Right: Actions */}
        <div className="d-flex align-items-center gap-3 position-relative">
          <button
            ref={heartButtonRef}
            className="btn btn-dark btn-sm"
            onClick={toggleDropdown}
          >
            🔗
          </button>
          <button className="btn btn-sm btn-danger fw-bold px-3" onClick={handleAddCartPlay}>$19.99</button>

          {/* Dropdown Card */}
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="position-absolute bg-dark text-white rounded p-3 shadow"
              style={{
                bottom: '100%',
                right: '0%',
                marginBottom: '0.5rem',
                width: 150,
                zIndex: 1040,
              }}
            >
              <h6 className="mb-2">Track Info</h6>
              <p style={{ fontSize: '0.85rem', margin: 0 }}>
                Genre: Trap<br />
                {currentTempo}<br />
                Key: C# Minor<br />
                License: Basic
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

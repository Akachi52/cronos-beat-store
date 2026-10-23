import React, { useEffect, useState } from 'react'; // 1. Added useState
import { Link } from 'react-router-dom';

interface TrackBarProps {
  name: string; 
  index: number;
  img: string; 
  author: string;
  lenght: string;
  tempo: number;
  audioSrc: string;
  handlePlay: () => void;
}
  
export default function TrackBar({ name, index, img, author, lenght, tempo, audioSrc, handlePlay }: TrackBarProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare(e: React.MouseEvent<HTMLButtonElement>) {
    const link = 'wait for link';

    try {
      await navigator.clipboard.writeText(link);
      console.log('copied link: ', link);
      
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.log('copy err: ', err);
    }
  }

  function handleAddCart(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('coming soon', e.target);
  }
  
  return (
    <div className="position-relative d-flex align-items-center justify-content-between bg-light rounded px-3 py-1 mb-2 flex-wrap gap-2" style={{ minHeight: '48px' }}>
      
      {/* 5. Floating Popup Notification */}
      {copied && (
        <div 
          className="position-absolute bg-dark text-white text-center rounded px-2 py-1 small"
          style={{ 
            top: '-35px', 
            right: '10px', 
            zIndex: 10,
            fontSize: '11px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}
        >
          Link copied to clipboard!
        </div>
      )}

      <span className="fw-bold me-2 small">{index + 1}</span>

      <img
        src={img}
        alt="Track image"
        className="rounded me-2"
        width="32"
        height="32"
      />

      <div className="flex-grow-1 d-flex flex-column justify-content-center" style={{ minWidth: 0 }}>
        <div className="d-flex align-items-center gap-2">
          <span className="fw-semibold small text-truncate">{name}</span>
        </div>
        <small className="text-muted">{author}</small>
      </div>

      <div className="d-flex align-items-center gap-2 text-muted small">
        <span>⏱ {lenght}</span>
        <span>|</span>
        <span>BPM: {tempo}</span>
      </div>

      <div className="d-flex align-items-center gap-1">
        <button className="btn btn-outline-dark btn-sm py-0 px-2" onClick={handlePlay}>Play</button>
        <button className="btn btn-outline-dark btn-sm py-0 px-2" onClick={handleShare}>Share</button>
        <button className="btn btn-outline-dark btn-sm py-0 px-2" onClick={handleAddCart}><i className="bi bi-cart"></i></button>
      </div>
    </div>
  );
} 

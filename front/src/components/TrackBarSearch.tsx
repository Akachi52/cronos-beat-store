import React from 'react';
import sampleTrackImage from '/image/sample image.png'

interface TrackBarProps {
  name: string;
  index: number;
  img: string;
  author: string;
  lenght: string;
  tempo: string;
}
  
export default function TrackBarSearch({ name, index, img, author, lenght, tempo }: TrackBarProps) {
  
  return (
    <div className="d-flex align-items-center justify-content-between bg-light rounded px-3 py-1 mb-2 flex-wrap gap-2" style={{ minHeight: '48px' }}>
      <span className="fw-bold me-2 small">{index + 1}</span>

      <img
        src={sampleTrackImage}
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
        <span>{lenght}</span>
        <span>|</span>
        <span>{tempo}</span>
      </div>

      <div className="d-flex align-items-center gap-1">
        <button className="btn btn-outline-dark btn-sm py-0 px-2">Play</button>
        <button className="btn btn-outline-dark btn-sm py-0 px-2">Share</button>
        <button className="btn btn-outline-dark btn-sm py-0 px-2"><i className="bi bi-cart"></i></button>
      </div>
    </div>
  );
}

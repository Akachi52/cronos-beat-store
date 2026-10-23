import React from 'react';

export default function BeatsTrackbarRow() {
  return (
    <div className="track-row d-flex align-items-center justify-content-between py-2 border-bottom border-secondary gap-0">
      
      {/* Left Area: Cover art and text metadata */}
      <div className="d-flex align-items-center flex-grow-1 min-w-0" style={{ maxWidth: '40%' }}>
        <img
          src="https://placeholder.com"
          className="me-2 rounded flex-shrink-0"
          alt="cover"
          style={{ width: 45, height: 45, objectFit: 'cover' }}
        />
        <div className="text-truncate">
          <strong className="d-block text-truncate small fw-bold">RUMBLE</strong>
          <small className="text-muted d-block text-truncate" style={{ fontSize: '0.75rem' }}>Trap</small>
        </div>
      </div>

      <div className="d-flex align-items-center flex-shrink-0 gap-0" style={{width: "60%"}}>
        <div className="text-muted " style={{width: '33%'}}>3:18</div>
        <div className="text-muted " style={{width: '33%'}}>145 BPM</div>

        <div className="d-flex align-items-center gap-4 " style={{width: '33%'}}>
          <button className="btn btn-sm p-1 border-0 shadow-none"><i className="bi bi-share"></i></button>
          <button className="btn btn-sm btn-dark px-2 py-1 border-0 shadow-none" style={{ fontSize: '0.8rem' }}><i className="bi bi-cart"></i></button>
        </div>
      </div>

    </div>
  );
}

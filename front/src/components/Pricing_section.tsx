import React from 'react';

export default function Pricing_section() {
  const plans = [
    {
      name: 'Mp3',
      price: '$19.99',
      highlighted: false,
      details: [
        'MP3 File',
        'Receive Files Immediately After Purchase',
        'Distribute Up To 5,000 Copies',
        '100,000 Online Audio Streams',
        '1 Music Video',
        '1 Paid Performance',
        'Radio Broadcasting Allowed',
      ],
    },
    {
      name: 'Wav',
      price: '$34.99',
      highlighted: false,
      details: [
        'MP3 and WAV File',
        'Receive Files Immediately After Purchase',
        'Distribute Up To 10,000 Copies',
        '500,000 Online Audio Streams',
        '2 Music Videos',
        'Unlimited Paid Performances',
      ],
    },
    {
      name: 'Premium',
      price: '$79.99',
      highlighted: false,
      details: [
        'MP3, WAV and STEMS File',
        'Receive Files Immediately After Purchase',
        'Distribute Up To 100,000 Copies',
        '1,000,000 Online Audio Streams',
        '1,000,000 Music Videos',
      ],
    },
    {
      name: 'Unlimited',
      price: '$139.99',
      highlighted: false,
      details: [
        'MP3, WAV and STEMS File',
        'Receive Files Immediately After Purchase',
        'Distribute Up To Unlimited Copies',
        'Unlimited Online Audio Streams',
        'Unlimited Music Videos',
      ],
    },
  ];

  return (
    <section className="text-white text-center py-5">
      <h3 className="fw-bold mb-5">Pricing</h3>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {plans.map((plan, i) => (
            <div className="col-12 col-sm-6 col-lg-3" key={i}>
              <div
                className={`rounded-3 p-4 h-100 ${
                  plan.highlighted ? 'bg-light text-black' : 'bg-black'
                }`}
                style={{ boxShadow: plan.highlighted ? '0 0 0 3px white' : '0 0 0 1px #444' }}
              >
                <h5 className="text-uppercase mb-3">{plan.name}</h5>
                <h3 className="fw-bold mb-2">{plan.price}</h3>
                <p className="text-muted small mb-3">
                  {plan.name === 'Unlimited' ? 'Non-Exclusive' : 'Non-Exclusive'}
                </p>

                <ul className="list-unstyled text-start small">
                  {plan.details.map((item, idx) => (
                    <li className="mb-2 d-flex align-items-start" key={idx}>
                      <span className="me-2 text-success">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button className={`btn mt-3 w-100 ${plan.highlighted ? 'btn-dark' : 'btn-light'}`}>
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

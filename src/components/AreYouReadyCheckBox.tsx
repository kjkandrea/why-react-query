import React, { useState } from 'react';

const AreYouReadyCheckBox = () => {
  const [isReady, setIsReady] = useState(false);

  const onChange = () => setIsReady(!isReady);

  return (
    <div className="are-you-ready">
      <label>
        <input type="checkbox" checked={isReady} onChange={onChange} />
        Are You Ready?
      </label>
      {isReady && (
        <div className="happy-hacking">
          <p>Happy Hacking! 😻</p>
        </div>
      )}
    </div>
  );
};

export default AreYouReadyCheckBox;

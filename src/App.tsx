import React from 'react';
import AreYouReadyCheckBox from '@/components/AreYouReadyCheckBox';

const App = () => {
  return (
    <div>
      <header>
        <h1>React boilerplate</h1>
        <p>
          <code>react + typescript + webpack + esbuild-loader</code>
        </p>
        <AreYouReadyCheckBox />
      </header>
    </div>
  );
};

export default App;

import React, { ReactElement } from 'react';

import WebpackLogo from '../images/webpack-logo.svg';

export const App: React.FC = (): ReactElement => {
  return (
    <>
      <h1>Webpack 5 React TypeScript Starter</h1>
      <WebpackLogo />
    </>
  );
};

import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';

import './styles/main.scss';

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
    module.hot.addStatusHandler((status) => {
      // eslint-disable-next-line
      if (status === 'prepare') console.clear();
    });
  }
}

createRoot(document.getElementById('root') as HTMLElement).render(<App />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

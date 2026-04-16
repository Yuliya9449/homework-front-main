import './index.css';
import { App } from './s1-main/App';
import reportWebVitals from './reportWebVitals';
import { store } from './s2-homeworks/hw10/bll/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const root = createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    {/*для дз 10*/}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

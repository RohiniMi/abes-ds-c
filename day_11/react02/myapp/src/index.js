import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './Header';

const data = {
  name: "abc",
  section: "c"
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header data={data}> </Header>
    <App />
  </React.StrictMode>
);


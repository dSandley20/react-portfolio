import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KitchenSink from './routes/KitchenSink';
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './themes/MainTheme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/kitchen-sink' element={<KitchenSink/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotFound from './pages/PageNotFound/NotFound';
import Register from './pages/Register/Register';
import Cashback from './pages/Cashback/Cashback.jsx';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store';

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/register', element: <Register />},
  {path: '/home', element: <Cashback />},
  {path: '*', element: <NotFound />},
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


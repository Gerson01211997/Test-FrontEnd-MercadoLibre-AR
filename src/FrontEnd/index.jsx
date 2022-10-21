/// Dependencies ///
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

/// Redux ///
import store from './lib/Redux/store';
import { Provider } from "react-redux";

/// Styles ///
import './globals.scss';
import { Container } from '@mui/material'

/// Routes ///
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';

/// Components and pages ///

import NavBar from './Components/utils/NavBar'
import Home from './Components/Home/Home'
import ProductSearch from './Components/SearchPage/SearchPage'
import ProductDetail from './Components/ProductDetail'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <NavBar />
      <Container maxWidth='lg' sx={{paddingBottom:10}}> 
            <Routes>
              <Route path="/items/:id" exact element={<ProductDetail/>} />
              <Route path="/items" exact element={<ProductSearch/>} />
              <Route path="/" >
                <Route path="/" exact element={<Home />}/>
                <Route path="/:id" exact element={<ProductDetail />}/>
              </Route> 
              {/*<Route path="/not-found" component={NotFound} /> */}
              {/* <Route component={NoPage} /> */}
            </Routes>
      </Container>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
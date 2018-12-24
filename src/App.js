import React from 'react';
import { Route } from "react-router-dom";

import Layout from './Components/Layout';

import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';


export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
  </Layout>
);
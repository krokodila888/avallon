import React from "react";
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import './App.css';

function App() {

  return (
    <>
      <div className="page">
          <Routes>
            <Route 
              exact path="/" 
              element={
                <Main />
              }>  
            </Route>
            <Route 
              path="*" 
              element={
                <PageNotFound/>
              }>
            </Route>
          </Routes>
      </div>
    </>
  );
}

export default App;

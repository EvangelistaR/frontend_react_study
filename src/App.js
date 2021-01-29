import React from 'react';
import Header from './components/Header';

/**
 * componente -> 
 * propriedades -> Informação que será de um componente pai p/ o componente filho
 * estado ->
 */

function App(){
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
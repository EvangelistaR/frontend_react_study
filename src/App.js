import React, { useState, useEffect } from 'react';
import api from './services/api';
import './App.css'
// import backgroundImg from './assets/background.jpeg';
import Header from './components/Header';

/**
 * componente -> 
 * propriedades -> Informação que será de um componente pai p/ o componente filho
 * estado ->
 */

function App(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  // useState retorna um array com 2 posições;
  // 1. Variável com seu valor inicial;
  // 2. Função para atualzar esse valor

  function handleAddProject(){
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      {/* <img src={backgroundImg} width="300"/> */}
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

export default App;
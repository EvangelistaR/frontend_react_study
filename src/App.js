import React, { useState } from 'react';
import Header from './components/Header';

/**
 * componente -> 
 * propriedades -> Informação que será de um componente pai p/ o componente filho
 * estado ->
 */

function App(){
  const [projects, setProjects] = useState(['Desenvolvimento de App', 'Front-end web']);


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
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

export default App;
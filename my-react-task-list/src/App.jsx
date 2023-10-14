import React, { useState, useEffect } from 'react'
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import { ChakraProvider, CSSReset, ColorModeScript} from '@chakra-ui/react'
import theme from "./Components/mytheme";
import "./App.css";

function App () {
  const listaTareas = [{
    description: "Completar actividades pendientes",
    completado: true
}, {
    description: "Hacer las compras de supermercado",
    completado: false
}, {
    description: "Limpiar la cocina",
    completado: false
}, {
    description: "Sacar el perro a pasear",
    completado : true
}, {
    description: "Doblar y guardar la ropa",
    completado: true
}];

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ColorModeScript />
      <div>
          <Header />
          <TaskList tasks={listaTareas} />
      </div>
      </ChakraProvider>
  );
};

export default App;

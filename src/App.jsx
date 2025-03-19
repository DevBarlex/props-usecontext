import './App.css';
import { CalculatorProvider } from './components/CalculatorProvider';
import RouterApp from './Routes';


import React from 'react';

function App() {
  return (
    <>
      <CalculatorProvider>
          <div>
            <RouterApp/>
          </div>
      </CalculatorProvider>
    </>
  );
}
export default App;
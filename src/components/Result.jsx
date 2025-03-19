// Se mostrara el resultado de la suma de todos los numeros pulsados 7 los que se han pulsado
// un reset para dejar los valores en 0

import React from "react";
import { Link } from "react-router-dom";
import { useNumber } from './CalculatorProvider';
import styles from "./Result.module.css";

//CREAREMOS EL COMPONENTE RESULT --->para mostrar resultado
const Result = () => {
    const { numbers, sumNumbers, resetCalculator } = useNumber();  // Obtenemos el número desde el contexto
    return (
        <>
        <div className={styles.Result}>
            <h2>{numbers.join('+')}</h2>
            <h3>Total: {sumNumbers()}</h3>
            <button onClick={resetCalculator} className="boton-reset">C</button>
        </div>
        <div>
            <Link to="/">Calculadora</Link>
        </div>
        </>
    );
};

export default Result; 

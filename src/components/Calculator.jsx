// aqui se mostrara la calculadora y permitira a los usuarios seleccionar numeros
// cuando se pulse un boton rediccionara a Result donde aparecera el resultado de la operación


import React from "react";
import { useNumber } from "./CalculatorProvider";
import { Link } from "react-router-dom";
import styles from "./Calculator.module.css";


const Calculator = ()=>{
    const {numbers, addNumber, selectNumber,resetCalculator }= useNumber();


return (
    <>
        <div className={styles.Calculator}>
            <h1>Calculadora</h1>
            <h2>{selectNumber}</h2>
            <h3>{numbers.join('+')}</h3>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button 
                key={num} 
                onClick={() => addNumber(num)} 
                className="number-button">
                {num}
            </button>
            ))}
        </div>
        <div >
            <button onClick={resetCalculator} className="boton-reset">Reset</button>
        </div>
        <div >
            <Link to="/result">Resultado</Link>
        </div>
        </>
    )
}
export default Calculator;

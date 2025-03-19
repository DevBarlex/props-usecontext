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
        <div className={styles.mainContainer}>
            <h1>Calculadora</h1>
            <div  className={styles.BotonesContainer}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                <button 
                    key={num} 
                    onClick={() => addNumber(num)}
                    className={numbers.includes(num) ? styles.buttonSelected : ''}> {/*clase que deja marcada selección númerica*/}
                    {num} 
                </button>
                ))}
                <button onClick={resetCalculator} className="boton-reset">C</button>
                <Link to="/result" className="boton-reset"><button>=</button></Link>
            </div>
        </div>
        </>
    )
}
export default Calculator;

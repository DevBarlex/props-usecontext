// aqui se mostrara la calculadora y permitira a los usuarios seleccionar numeros
// cuando se pulse un boton rediccionara a Result donde aparecera el resultado de la operación


import React from "react";
import { useNumber } from "./CalculatorProvider";
import { Link } from "react-router-dom";

const Calculator = ()=>{
    const {numbers, addNumber, selectNumber}= useNumber();


return (
    <>
        <div>
            <h1>Calculadora</h1>
            <h2>Numero actual: {selectNumber}</h2>
            <h3>Numeros seleccionados: {numbers.join('')}</h3>
        </div>
        <div className="button-container">
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
            <Link to="/result">Resultado</Link>
        </div>
        </>
    )
}
export default Calculator;

/*onst Calculator = () => {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [symbol, setSymbol] = useState('');
    const [result, setResult] = useState(null);

    //Prevents the page from reloading.
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    //*CALCULATOR FUNCTIONS

    /*Add function
    const add = (value1, value2) => {
        //?Converts the string values obtained from the inputs into a number type
        const number1 = parseInt(value1);
        const number2 = parseInt(value2);

        return number1 + number2;
    }



    const reset = () => {
        setValue1('');
        setValue2('');
        setResult(null)
    }
    */
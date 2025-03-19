//Aqui usaremos createContext 
// Crearemos una lista y un numero seleccionado


//utilizará `createContext` para proporcionar un contexto a la aplicación. 
import {createContext, useContext, useState} from "react";
const CalculatorContext = createContext()
export const CalculatorProvider=({children})=>{ 
    const [numbers, setCalculator]= useState ([])
    const [selectnumber, setSelectNumber] = useState(0)
    
    
    // funcion añadir numeros a la lista
    const addNumber = (number) => {
        setCalculator((prevNumbers) => [...prevNumbers, number])
        setSelectNumber((prev) => prev + number)
    }
    // funcion sumar numeros seleccionados
    
    const sumNumbers = () => {
        return numbers.reduce((acc, num) => acc + num, 0)
    }
    // funcion restrablecer la calculadora
    const resetCalculator = () => {
        setCalculator([])
        setSelectNumber(0)
    }

    return (
        <CalculatorContext.Provider value={{numbers, selectnumber, addNumber, sumNumbers, resetCalculator}}>
            {children}
        </CalculatorContext.Provider>
        )
};
   
//exportamos el hook para utilizar el contexto
export const useNumber= ()=> useContext(CalculatorContext)
//FUNCION AGREGAR NÚMERO LISTA
//SUMAR NÚMEROS SELECCIONADOS
//RESTABLECER CALCULADORA




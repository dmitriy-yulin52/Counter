import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import  './App.css';
import CalculatorContainer from "./Calculator/CalculatorContainer";


function App() {


    // let [counter, setCounter] = useState(0)
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('clickCounterValue')
    //     if (valueAsString) {
    //         let newCounterValue = JSON.parse(valueAsString)
    //         addStartValue(newCounterValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('clickCounterValue', JSON.stringify(counter))
    // }, [counter])

    // const incCounter = () => {
    //     setCounter(++counter)
    // }
    // const addStartValue = (startValue: number) => {
    //     setCounter(startValue)
    // }
    // const resCounter = (resValue: number) => {
    //     setCounter(resValue)
    // }


    return (
        <div className="App">
            <div className={'block-navLink'}>
                <div className={'navLink'}>
                    <NavLink to={'/global'}>Counter</NavLink>
                </div>
                <div className={'navLink'}>
                    <NavLink to={'/Calculator'}>Calculator</NavLink>
                </div>
            </div>

            <Route
                path={'/global'}
                render={()=><CalculatorContainer/>}
            />

        </div>
    );
}

export default App;

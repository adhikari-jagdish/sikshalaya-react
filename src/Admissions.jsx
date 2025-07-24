import './styles.css'
import CommonTitleComponent from './components/common_title_component';
import { useState } from 'react';

function Admissions() {
    //let textValue = 1;
    const [textValue, setTextValue] = useState(1);


    function add() {
        setTextValue(textValue + 1);

        console.log(textValue);
    }

    function substract() {
        setTextValue(textValue - 1);

        console.log(textValue);
    }

    return (
        <main>
            <CommonTitleComponent
                title={"Admissions"}
                description={"Not just any admissions, we provide the excellent teaching-learning experience to prepare you in your career."}
            />
            <p className="demoButton">
                <span><button onClick={substract}>-</button></span>
                <span className='text'>{textValue}</span>
                <span><button onClick={add}>+</button></span>
            </p>

        </main>
    );
}
export default Admissions;
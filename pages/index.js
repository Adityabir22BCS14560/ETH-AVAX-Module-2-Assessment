import { useState } from "react";

export default function HomePage() {
    const [value1, setValue1] = useState(undefined);
    const [value2, setValue2] = useState(undefined);
    const [result, setResult] = useState(undefined);
    const [newValue1, setNewValue1] = useState("");
    const [newValue2, setNewValue2] = useState("");

    const updateValue1 = () => {
        setValue1(Number(newValue1));
        if (value2 !== undefined) {
            setResult(value2 * Number(newValue1));
        }
    };

    const updateValue2 = () => {
        setValue2(Number(newValue2));
        if (value1 !== undefined) {
            setResult(value1 * Number(newValue2));
        }
    };

    const handleAddition = () => {
        setResult(value1 + value2);
    };

    const handleSubtraction = () => {
        setResult(value1 - value2);
    };

    const handleMultiplication = () => {
        setResult(value1 * value2);
    };

    const handleDivision = () => {
        if (value2 !== 0) {
            setResult(value1 / value2);
        } else {
            setResult("Error: Division by zero");
        }
    };

    return (
        <div className="container">
            <h1><b>Simple Calculator</b></h1>
            <label>Value 1: <span>{value1}</span></label><br /><br/>
            <input
                type="number"
                value={newValue1}
                onChange={(e) => setNewValue1(e.target.value)}
                placeholder="New Value"
            />
            <button onClick={updateValue1}>Set Value 1</button><br/> <br/><br/>

            <label>Value 2: <span>{value2}</span></label><br /><br/>
            <input
                type="number"
                value={newValue2}
                onChange={(e) => setNewValue2(e.target.value)}
                placeholder="New Value"
            />
            <button onClick={updateValue2}>Set Value 2</button><br/> <br/>

            <button onClick={handleAddition}>Add</button>
            <button onClick={handleSubtraction}>Subtract</button>
            <button onClick={handleMultiplication}>Multiply</button>
            <button onClick={handleDivision}>Divide</button><br/> <br/>

            <label>Result: <span>{result}</span></label>
            <style jsx>{`
                .container{
                    text-align: center;
                    margin-top: 150pt;
                }
                input{
                    text-align: center;
                    border:0;
                    border-bottom: 2pt solid gray;
                    margin-right: 10pt;
                    width: 50pt;
                }

                span{
                    font-weight: bold;
                    text-decoration: underline;
                }

                button {
                    margin: 5pt;
                }
            `}</style>
        </div>
    );
}

import { useState } from 'react';

export default function Grid (props) {
    
    let [squares, setSquares] = useState([
        {}, 
        {}, 
        {}, 
        {}, 
        {}, 
        {}, 
        {}, 
        {}, 
        {}, 
    ]);

    let symbol = props.symbol || "X";

    const registerSelection = ((i) => {
                squares[i] = { 
            checked: true,
            symbol: symbol
        }
        setSquares([...squares]);
        props.updateSelection(i);
    })
    
    return (
        <div className="grid">
            {squares.map((square, i) => {
                return (<div key={`square-${i}`} onClick={() => registerSelection(i)}>{square.checked ? square.symbol : ''}</div>)
            })}    
        </div>
    )
}
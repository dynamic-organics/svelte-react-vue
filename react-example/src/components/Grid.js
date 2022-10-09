import { useState } from 'react';

export default function Grid (props) {
    
    // Like the higher-level app, needed to convert to useState in order to actually update grid visually
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

        // Here we don't dispatch the function, but instead call the function provided to use from the parent component
        props.updateSelection(i);
        // Personal note: the issue I have with this pattern is that, 
        // in some cases, not all components need to expose the same data to all parents; 
        // in those instances the component would fail or the parent would need to instantiate a dummy function
    })
    
    // The template / markeup is contained within a `return` function; 
    // React generally requires use of the `map` function to dynamically create an array of HTML elements from an existing array
    return (
        // Since 'class' is a reserved JS word, HTML markup must change to use `className` for css classing of elements
        <div className="grid">
            {squares.map((square, i) => {
                // Can not forget that you must specify a key attribute for iterated elements in React
                return (<div key={`square-${i}`} onClick={() => registerSelection(i)}>{square.checked ? square.symbol : ''}</div>)
            })}    
        </div>
    )
}

// Styles are in another file.
// Including css-in-js is possible,
// but requires a third-party library that is not automatically included in create-react-app
// Having CSS in a more global file, while an existing paradigm in the web world, means CSS is applied globally and not component-scoped
// To maintain component-scoping, the developer must use a CSS name-scoping style, such as BEM
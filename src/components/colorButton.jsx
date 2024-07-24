import React, { useState } from 'react';

// don't change the Component name "App"
export default function ColorButton() {
    const [color, setColor] = useState(false);

    function toggle() {
        setColor(!color);

    }
    return (
        <div>
            <p style={{ color: color ? 'red' : 'white' }}>Style me!</p>
            <button onClick={toggle}>Toggle style</button>
        </div>
    );
}

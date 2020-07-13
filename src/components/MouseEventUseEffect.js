/*
Moving mouse = Run useEffect only once.
*/

import React, { useState, useEffect } from 'react';

function MouseEventUseEffect() {
    const [x, setX] = useState(0);
    const [y, setY ] = useState(0);

    const logMousePosition = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)
        // Cleanup  subscription in useEffect.
        return () => {
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, [])

    return (
        <div>
            <h3>Example of useEffect running once and cleanup</h3>
            Hooks X - {x} Y - {y}
        </div>
    )
}
export default MouseEventUseEffect;
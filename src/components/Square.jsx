import React from 'react';

export default function Square(props) {
    const {color} = props
    return (
        <span class="square" style={{
            backgroundColor: color || "teal"
        }}/>    
    )
}
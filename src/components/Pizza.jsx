import { useState } from React from 'react';


export default function Pizza() {
    const [diameter, setDiameter] = useState({ diameter: 0 })
    const [price, setPrice] = useState({ price: 0 })
    console.log(diameter, price)

    return (
        <div>
            <input placeholder="Diameter" onChange={e => setDiameter(e.target.value)} ></input>
            <input placeholder="Price" onChange={e => setPrice(e.target.value)}></input>
            <div> Surface area = {surfaceArea(diameter) || 0}</div>
            <div> Square inch per Rupee = {surfaceArea(diameter) / price || 0}</div>
            <br />
        </div>
    )
}

function surfaceArea(diameter) {
    const Pi = 3.141592653589793238
    const radius = diameter / 2
    return Pi * radius * radius
}

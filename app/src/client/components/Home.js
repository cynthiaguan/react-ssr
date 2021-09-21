import React, { useEffect, useState } from 'react';


export default function Home(){
    const [count, setCount] = useState(0);
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count => count + 1)}>
                Click me
            </button>
        </>
    );
}
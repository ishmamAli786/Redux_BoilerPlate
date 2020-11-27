import React from 'react';
import { useSelector } from 'react-redux';



export default function CounterInput() {
    const counter = useSelector((state)=>state.counter);
    return (
        <>
        Counter Value: {counter}
        </>
    )
}
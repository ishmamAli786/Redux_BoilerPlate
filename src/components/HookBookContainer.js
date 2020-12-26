import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { buyBook } from '../redux/index';
function HookBookContainer() {
    const numberofBooks=useSelector(state => state.numberofBooks);
    const dispatch=useDispatch();
    return (
        <div>
            <h1>Hook Conatiner</h1>
            <h2>Number Of Books -{numberofBooks}</h2>
            <button onClick={() => dispatch(buyBook())}>Buy Book</button>
        </div>
    )
}

export default HookBookContainer

import React,{useState} from 'react';
import {connect} from 'react-redux';
import { buyBook } from '.././redux/index';
function BuyBook(props) {
    const [number,setNumber]=useState(1)
    return (
        <div>
            <h1>Book Component</h1>
            <h1>Number Of Books -{props.numberofBooks}</h1>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/> 
            <button onClick={()=>props.buyBook(number)}>Buy {number} Books</button>
        </div>
    )
} 

const mapStatetoprops=(state)=>{
    return{
        numberofBooks: state.numberofBooks
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyBook:function(number){
            dispatch(buyBook(number));
        }
    }
}
export default connect(mapStatetoprops, mapDispatchToProps)(BuyBook)
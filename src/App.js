import React from 'react';
import './App.css';
import {connect} from 'react-redux'; 
import {set_data} from './store/action/index';


function App(props) {
  return (
    <div className="App">
    <h1>Hello This Is Redux</h1>
    <h2>My Name Is Ishmam ALi {props.name}</h2>
    <h3>My Email Is {props.email}</h3>
    <h4>The Name Of App is {props.app_name}</h4>
      <button onClick={() => props.set_data("Bhai Data yaha sy bi ja sakta ha")} >Set Data</button>
    </div>
  );
}


const mapStateToProps=(state)=>({
    username: state.auth.username,
    email:state.auth.email,
    app_name:state.app.app_name
})


const mapDispatchToProps=(dispatch)=>({
  set_data: (data) => dispatch(set_data(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

const redux=require('redux');
const createStore=redux.createStore;
const combineReducer=redux.combineReducers;
const applyMiddleware=redux.applyMiddleware;

const Buy_Book="Buy_Book";
const Buy_Pen = "Buy_Pen";


const initialStateBooks={
    numberOfBooks:10,
}


const initialStatePens = {
    numberOfPens: 30,
}


//// action creater: wrapping the action in a single function
function buyBook(){
        return {
            ///action
            type: Buy_Book,
            payload: "My First Action"
        }
}

function buyPen() {
    return {
        ///action
        type: Buy_Pen,
        payload: "My Second Action"
    }
}

const BookReducer = (state = initialStateBooks,action)=>{
    switch (action.type){
        case "Buy_Book": return{
            ...state,
             numberOfBooks:state.numberOfBooks-1
        }
        default:return state;
    }
}

const penReducer = (state = initialStatePens, action) => {
    switch (action.type) {
        case "Buy_Pen": return {
            ...state,
            numberOfPens: state.numberOfPens - 2
        }
        default: return state;
    }
}


const logger =store=>{
    return next=>{
        return action=>{
            const result=next(action);
            console.log("middleware log",result);
            return result;
        }
    }
}
const reducer = combineReducer({BookReducer, penReducer})
const store = createStore(reducer, applyMiddleware(logger));
console.log("Initial State Value",store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log('Updated State Value',store.getState())
});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
unsubscribe();

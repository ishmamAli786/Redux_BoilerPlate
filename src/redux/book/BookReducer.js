import { BUY_BOOK } from './BookType';

const initalState={
    numberofBooks:10,
}

const bookReducer = (state = initalState,action)=>{
    switch(action.type){
        case BUY_BOOK:return {
            ...state,
            numberofBooks: state.numberofBooks-action.payload,
        }
        default :return state
    }
}

export default bookReducer ;
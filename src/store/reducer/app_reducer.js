const INITIAL_STATE = {
    app_name: "Chat App",
}


const app= (state = INITIAL_STATE,action) => {
    console.log("app_action=>",action)
    switch(action.type){
        case 'SETDATA':
        return ({
            ...state,app_name:action.data
        })
    }
    return state;
}
export default app;
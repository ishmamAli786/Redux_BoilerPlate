const INITIAL_STATE = {
    username: "khan",
    email:"ishmam@gmail.com"
}


const auth= (state = INITIAL_STATE,action) => {
    console.log("auth_action=>", action)
    return state;
}
export default auth;
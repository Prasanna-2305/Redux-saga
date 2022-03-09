import { USERSUCCESS, USERREQUEST, USERERROR } from "../action/index"
const initialState ={
    loading: false,
    users: [],
    error: ''
}

const fetchUser = (state = initialState, action)=> {
    switch(action.type){
        case "USERREQUEST":
            return{
                ...state,
                loading : true
            }
        case "USERSUCCESS":
            return{
                ...state,
                loading:false,
                users: action.payload,
                error : ''
            }
        case "USERERROR" :
            return{
                ...state,
                loading:false,
                users: [],
                error : action.payload
            }
        default: return{
            state
        }
    }
}

export default fetchUser;
export const USERREQUEST = 'USERREQUEST';
export const USERSUCCESS = 'USERSUCCESS';
export const USERERROR = 'USERERROR';

export const fetchData =() =>{
    return{
        type: "USERREQUEST",
    
    }
}

export const fetchDataSuccess = (users) =>{
    return {
        type: "USERSUCCESS",
        payload: users
    }
}

export const fetchDataError = (error) =>{
    return{
        type : "USERERROR",
        payload: error
    }
}
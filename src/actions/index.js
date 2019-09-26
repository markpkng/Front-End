import React from 'react';
import axios from 'axios';
import {axiosWithAuth} from '../components/AxiosAuth';


import {MESSAGE_SUCCESS, 
    MESSAGE_ERROR, 
    SENDING_DATA, 
    LOGOUT, 
    LOGIN,
    LOGIN_MODAL_ON,
    LOGIN_MODAL_OFF,
    REGISTER_MODAL_ON,
    REGISTER_MODAL_OFF,
    MESSAGE_MODAL_ON,
    MESSAGE_MODAL_OFF,
    MODULE_MODAL_ON,
    MODULE_MODAL_OFF
} from '../reducers';

export const sendMessage = (message, history) =>{
    message.userID = localStorage.getItem('userID');
    console.log(message);
    return dispatch =>{
        // dispatch({
        //     type: SENDING_DATA
        // });
        
        axiosWithAuth()
        .post('/', message)
        .then(res=>{
            // dispatch({
            //     type: MESSAGE_SUCCESS
            // });
            dispatch({
                type: MESSAGE_MODAL_ON
            })
            // alert(res.data.message);
            // history.push('/success');
        })
        .catch(err=>{
            console.log(err.response);
            dispatch({
                type: MESSAGE_ERROR
            });
        });
    }
}

export const loginFunction = (credentials, history) =>{
    

    return dispatch =>{
        console.log(credentials);
        axios
        .post('https://empowered-conversations.herokuapp.com/login', credentials)
        .then(res=>{
            
            console.log(res.data.userID);
            localStorage.setItem("userID", res.data.userID);
            localStorage.setItem("ec-token", res.data.token);
            dispatch({type: LOGIN});
            dispatch({type: LOGIN_MODAL_ON});
            // history.push('/form');
    // dispatch( {
    //     type: LOGIN
    // });
    
        })
        .catch(err=>{
            
            alert(err.response.data.message);

        });
    }
}

export const logoutFunction = () =>{
    return {
        type: LOGOUT
    }
}

export const loginTest = () =>{
    return {
        type: LOGIN
    }
}

export const registerFunction = (credentials, history) =>{

    return dispatch =>{
        // dispatch({type: loadingsomething});
        axios
        .post('https://empowered-conversations.herokuapp.com/register', credentials)
        .then(res=>{
            dispatch({type: REGISTER_MODAL_ON});

    
        })
        .catch(err=>{
            console.log(err);
            console.log('error');

        });
    }
}

export const activateLoginModal = () =>{
    return {type: LOGIN_MODAL_ON};
}

export const deactivateLoginModal = () =>{
    return {type: LOGIN_MODAL_OFF};
}

export const activateRegisterModal = () =>{
    return {type: REGISTER_MODAL_ON};
}

export const deactivateRegisterModal = () =>{
    return {type: REGISTER_MODAL_OFF};
}

export const activateMessageModal = () =>{
    return {type: MESSAGE_MODAL_ON};
}

export const deactivateMessageModal = () =>{
    return {type: MESSAGE_MODAL_OFF};
}

export const activateModuleModal = () =>{
    return {type: MODULE_MODAL_ON};
}

export const deactivateModuleModal = () =>{
    return {type: MODULE_MODAL_OFF};
}
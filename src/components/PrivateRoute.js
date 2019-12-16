import React, {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext'
import {Route,Redirect} from 'react-router-dom';



const PrivateRoute = ({component:Component,...rest})=>{
    const {authState} = useContext(AuthContext)
    return <Route {...rest} render={props=>(
        authState.auth? <Component {...rest}/> : <Redirect to='/login'/>
    )}/>
}

export default PrivateRoute
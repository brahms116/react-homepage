import React, {useState} from 'react';
import EmptyDiv from './EmptyDiv'
import Checkbox from './Checkbox';

const Login = ()=>{

    const [loginState, setloginState] = useState({savePassword:false})

    const updateId = (e)=>{
        setloginState({
            ...loginState,
            id:e.target.value
        })
    }

    const updatePassword = (e)=>{
        setloginState({
            ...loginState,
            secret:e.target.value
        })
    }


    const toggleCheckbox =()=>{
        setloginState({
            ...loginState,
            savePassword:!loginState.savePassword
        })
    }

    return(
        <div className="Login grid-center">
            <div className='grid-container grid-one-column'>
                <EmptyDiv height='20vh'/>
                <h2>Auth()</h2>
                <EmptyDiv height='3.75rem'/>
                <h4>Credientials:</h4>
                <EmptyDiv height='2rem'/>
                <input type='text' placeholder='id' onChange={e=>{updateId(e)}}></input>
                <EmptyDiv height='1rem'/>
                <input type='password' placeholder='secret' onChange={e=>{updatePassword(e)}} ></input>
                <EmptyDiv height='1rem'/>
                <Checkbox label='Remember Me' toggle={toggleCheckbox}/>
                <EmptyDiv height='1.75rem'/>
                <div className="btn" >Login</div> 
            </div>
        </div>
    )
};

export default Login;
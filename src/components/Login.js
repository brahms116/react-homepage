import React from 'react';
import EmptyDiv from './EmptyDiv'
import Checkbox from './Checkbox';
const Login = ()=>{
    return(
        <div className="Login grid-center">
            <div className='grid-container grid-one-column'>
                <EmptyDiv height='20vh'/>
                <h2>Auth()</h2>
                <EmptyDiv height='3.75rem'/>
                <h4>Credientials:</h4>
                <EmptyDiv height='2rem'/>
                <input type='text' placeholder='id'></input>
                <EmptyDiv height='1rem'/>
                <input type='password' placeholder='secret'></input>
                <EmptyDiv height='1rem'/>
                <Checkbox label='Remember Me'/>
                <EmptyDiv height='1.75rem'/>
                <div className="btn" >Login</div> 
            </div>
        </div>
    )
};

export default Login;
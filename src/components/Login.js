import React, {useState, useContext, useEffect} from 'react';
import EmptyDiv from './EmptyDiv';
import Checkbox from './Checkbox';
import {AuthContext} from '../contexts/AuthContext';
import Service from '../components/Service';
import {useHistory} from 'react-router-dom';

const Login = ()=>{



    let history = useHistory()
    const [loginState, setloginState] = useState({savePassword:false})
    const {dispatch} = useContext(AuthContext);
    useEffect(()=>{
        if(localStorage.getItem('creds')){
            const push = async()=>{
                let creds = JSON.parse(localStorage.getItem('creds'))
                try{
                    const result = await Service.login(creds.id,creds.secret)
                    dispatch({type:'LOGIN',payload:result})
                    history.push('/dash')
                }
                catch(err){
                    setloginState({
                        ...loginState,
                        error:'Sorry, your credentials have expired, please login again'
                    })
                }
            }
            push()

        }
    },[])


    const updateId = (e)=>{
        setloginState({
            ...loginState,
            id:e.target.value
        });
    };

    const updatePassword = (e)=>{
        setloginState({
            ...loginState,
            secret:e.target.value
        });
    };


    const toggleCheckbox =()=>{
        setloginState({
            ...loginState,
            savePassword:!loginState.savePassword
        })
    };

    
    const handleClick =async ()=>{
        try{
            let result = await Service.login(loginState.id,loginState.secret);
            if(loginState.savePassword){
                localStorage.setItem('creds',JSON.stringify({id:loginState.id,secret:loginState.secret}))
            }            
            dispatch({type:'LOGIN',payload:result});            
            history.push('/dash')        
            
        }
        catch(err){
            setloginState({
                ...loginState,
                error:err
            })
        }
    };

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
                <EmptyDiv height='1rem'/>
                <div className='error'>{loginState.error}</div>
                <EmptyDiv height='1.75rem'/>
                <div className="btn" onClick={()=>{handleClick()}} >Login</div> 
            </div>
        </div>
    )
};

export default Login;
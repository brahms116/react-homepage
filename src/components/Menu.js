import React from 'react';
import EmptyDiv from './EmptyDiv';
import {useHistory} from 'react-router-dom'
const Menu = (props)=>{
    const history = useHistory()
    const logout =()=>{
        if(localStorage.getItem('creds')) localStorage.removeItem('creds');
        history.push('/')

    }
    

    return(
        <div className={props.isOpen? 'menu md--block' :'menu md--block close'}>
            <div className='grid-one-row nav--top'> 
                <h2>Menu.</h2>
                <div />
                <i className='material-icons' onClick={()=>{props.toggle()}} >close</i>
            </div>
            <div className='grid-one-column'>
                <EmptyDiv height="3.75rem"/>
                <div className='menu-text' onClick={logout}>Logout--></div>
            </div>
        </div>
        
    )
};

export default Menu;
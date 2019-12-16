import React, { useState } from 'react';
import Menu from './Menu';

const Dash = ()=>{
    
   
    const [state,setState] =useState({isMenuOpen:false})

    const toggleMenu = ()=>{
        setState({isMenuOpen:!state.isMenuOpen})
    }

    return(
        <div className = "Dash grid-center">
            <div className='grid-container '>
                
                <div className='grid-one-row nav--top'>
                    <h2>Dashboard.</h2>
                    <div/>
                    <div className='btn btn--thin ld'>Logout</div>
                    <i className='material-icons md--block--important' onClick={()=>{toggleMenu()}} >menu</i>
                </div>
                <Menu toggle={toggleMenu} isOpen={state.isMenuOpen}/>
            </div>
        </div>
    )
};

export default Dash;
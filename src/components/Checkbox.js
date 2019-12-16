import React, { useState } from 'react';

const Checkbox = (props)=>{
    
    const [state,setstate] = useState({active:false})

    const handleClick =()=>{
        setstate({active:!state.active})
        props.toggle()
    }

    return(
        <div className='Checkbox' onClick={handleClick}>
            <div className={state.active ? 'box box-filled' : 'box'}/>
            <div className='label'>{props.label}</div>
        </div>
        
    )
};

export default Checkbox;
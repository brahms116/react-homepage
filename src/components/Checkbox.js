import React, { useState } from 'react';

const Checkbox = (props)=>{
    
    const [state,setstate] = useState({active:false})

    return(
        <div className='Checkbox' onClick={()=>{setstate({active:!state.active})}}>
            <div className={state.active ? 'box box-filled' : 'box'}/>
            <div className='label'>{props.label}</div>
        </div>
        
    )
};

export default Checkbox;
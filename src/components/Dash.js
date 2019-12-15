import React from 'react';

const Dash = ()=>{
    

    

    return(
        <div className = "Dash grid-center">
            <div className='grid-container '>
                
                <div className='grid-one-row nav--top'>
                    <h2>Dashboard.</h2>
                    <div/>
                    <div className='btn btn--thin ld'>Logout</div>
                    <i className='material-icons md--block--important'>menu</i>
                </div>
                <div className='menu'>
                    <div className='grid-one-row nav--top md--grid' > 
                        <h2>Menu.</h2>
                        <div />
                        <i className='material-icons'>close</i>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dash;
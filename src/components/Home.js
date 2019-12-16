import React from 'react';
import EmptyDiv from './EmptyDiv';
import {useHistory} from 'react-router-dom';
import Verse from './Verse'

const Home = ()=>{

    let history = useHistory();

    const handleClick = ()=>{
        history.push('/login')
    }
    return(
        <div className="Home grid-center">
            <div className="grid-container grid-one-column">
                <EmptyDiv height='30vh'></EmptyDiv>                
                <h2>Hello David.</h2>
                <EmptyDiv height='0.75rem'></EmptyDiv>   
                <Verse/>
                <EmptyDiv height='1.75rem'></EmptyDiv>                
                <div className='btn btn--reg' onClick={()=>{handleClick()}}>Dashboard</div>
            </div>
        </div>
    )
};

export default Home;
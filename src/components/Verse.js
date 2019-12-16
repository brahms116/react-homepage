import React,{useEffect,useState} from 'react'
import axios from 'axios'
import verses from '../verses'
const Verse = ()=>{
    const cred = 'Token 897468291909622ba16a43710fd00efbc619cdd4'
    const verse = verses[Math.ceil(verses.length*Math.random())]
    const url = 'https://api.esv.org/v3/passage/text/'

    const[state,setState] = useState({})

    const regex = [/^.+\d+:\d+/g, //passage labels
        /.+\d+\s/g, //finishing the labels
        /\(\d*\)/g,  //foot notes index,
        /\n\n\S.*/g, //Get rid of foot notes
        /\(ESV\)/g,
        /\n/g,
        /\s\s\s/g
        ]
    

    useEffect(()=>{
        const service = async()=>{
            try{
                let r = await axios.get(url,{params:{q:verse},headers:{'Authorization':cred}})
               
                let texts = r.data.passages

                const reducedText = texts.map(x=>{
                    console.log(x)
                    regex.forEach(d=>{
                        x = x.toString().replace(d,'')
                    })
                    return x
                })
                
                   
                setState({data:reducedText,verse:r.data.canonical})      

            }
            catch(err){
                console.log(err)
            }
        }
        service()
    },[])



    

    
    

    return(
        <div>
            <div className='sub--h2'>{state.verse}-ESV</div>
            <div className="sub--h2">{state.data}</div>
        </div>
    )

}

export default Verse
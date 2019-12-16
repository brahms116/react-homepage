import React, {createContext, useReducer} from 'react'


 export const AuthContext = createContext()

 const reducer = (state,action)=>{
     switch(action.type){
        case 'LOGIN':
            return {...state,auth:true,token:action.payload};             
        default:
     }
 }


 const AuthContextProvider = (props)=>{
     const [authState,dispatch] = useReducer(reducer,{auth:false})

     return(
         <AuthContext.Provider value={{authState,dispatch}}>
             {props.children}
         </AuthContext.Provider>
     )

 }

 export default AuthContextProvider

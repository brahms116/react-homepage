import React, {createContext, useReducer} from 'react'


 export const AuthContext = createContext()

 const reducer = async (state,action)=>{
     switch(action.type){
         case 'LOGIN':
             return {...state,auth:true}
        default:
     }
 }


 const AuthContextProvider = (props)=>{
     const [authState,dispatch] = useReducer(reducer,{auth:true})

     return(
         <AuthContext.Provider value={{authState,dispatch}}>
             {props.children}
         </AuthContext.Provider>
     )

 }

 export default AuthContextProvider

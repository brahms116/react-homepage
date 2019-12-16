
export default class Service{
    static login(id,secret){
        return new Promise ((resolve,reject)=>{
            try{
                if(id==='Brahms116' && secret==="KingOfNations"){
                    setTimeout(resolve('jwtToken'),1000);
                }else{
                    
                    setTimeout(reject('Incorrect Credentials'),1000);
                }
            }
            catch(err){
                reject(err)
            }

        })
      
    }
     
}
import { jwtVerify } from "jose";
import { decode } from "jsonwebtoken"

const validateToken = async(token)=> {
    const secret = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NTY5MTU0MiwiaWF0IjoxNjk1NjkxNTQyfQ.EG-A9n08TjSSm2affCX5Bl3yRpDbIytMIO5j2iMalLA"
    try{
        /*const isTokenValidate = await jwtVerify(token, TextEncoder().encode(secret));
        if(isTokenValidate){
            console.log(isTokenValidate);
            return true
        }*/
        const isTokenValidate = await decode(token);
        if(isTokenValidate){
            console.log(isTokenValidate);
            return true
        }
         }
          catch{
          return false
      }
}   
export {validateToken};
import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const userAuth = await getUserAuthenticated(user);
    
    const isTokenValidate = validateToken(userAuth.token);

    if (isTokenValidate) {
        Cookies.set('token', userAuth.token, { expires: 1 });
        if (typeof window !== 'undefined'){
            localStorage.setItem('nome', userAuth.nome)
        }
    }
    return userAuth
}
export default handlerAcessUser;


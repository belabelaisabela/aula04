import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import  ListUsers  from "@/app/functions/componentes/ListUsers"
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './style.css'

export default async function Dashboard() {
   const listaa = await getUsers()
    return (
    <div>
    <nav id="menu-h">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="/pages/dashboard/register.js">Register</a></li>
            <li><a href="alterar.js">Alterar</a></li>
        </ul>
    </nav>
       
            <Suspense fallback={<p>Carregando...</p>}>
                <ListUsers users={listaa}/>
            </Suspense>  
    </div>
    );
};

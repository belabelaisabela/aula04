import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import  ListUsers  from "@/app/functions/componentes/ListUsers"
import 'react-toastify/dist/ReactToastify.min.css';
import Link from "next/link";
import styles from './style.css'

export default async function Dashboard() {
   const users = await getUsers()
    return (
    <div>
    <nav id="menu-h">
        <ul>
            <li><Link href={"/pages/dashboard"}>Home</Link></li>
            <li><Link href={"/pages/register"}>Register</Link></li>
            <li><Link href={"/pages/alter"}>Alter</Link></li>
        </ul>
    </nav>
    <div className="nomes">
            <Suspense  fallback={<p>Carregando...</p>}>
                <ListUsers  users={users}/>
            </Suspense> 
            </div> 
    </div>
    );
};

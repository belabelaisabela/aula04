import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import Link from "next/link";


export default async function Register() {
    return (
    <div>
    <nav id="menu-h">
        <ul>
            <li><Link href={"/pages/dashboard"}>Home</Link></li>
            <li><Link href={"/pages/register"}>Register</Link></li>
            <li><Link href={"/pages/alter"}>Alterar</Link></li>
        </ul>
    </nav>
       <h1>REGISTRAR</h1>
    </div>
    );
};
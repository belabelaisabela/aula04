import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import Link from "next/link";
import styles from './style3.css';


export default async function Alter() {
    return (
    <div>
    <nav id="menu-h">
        <ul>
            <li><Link href={"/pages/dashboard"}>Home</Link></li>
            <li><Link href={"/pages/register"}>Register</Link></li>
            <li><Link href={"/pages/alter"}>Alter</Link></li>
        </ul>
    </nav>
       Alterar
    </div>
    );
};
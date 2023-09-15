'use client'
import { Suspense } from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import styles from './style3.css'


function Alter() {
    const notify =() => toast.success("Usuário Alterado com sucesso!");
 
    return (
    <body>
    <div>
    <nav id="menu-h">
        <ul>
            <li><Link href={"/pages/dashboard"}>Home</Link></li>
            <li><Link href={"/pages/register"}>Register</Link></li>
            <li><Link href={"/pages/alter"}>Alter</Link></li>
        </ul>
    </nav>
    <div className="box-formulario">
    <div className="alter">
       
      <form>
      <h3>ALTERAR</h3>
      <hr></hr>
        <p>Name:</p>
        <input className="inpu"
          placeholder='Name'
          type='name'>
        </input><br/>
        <p>E-mail:</p>
        <input className="inpu"
          placeholder='E-mail'
          type='email'>
        </input><br/>
        <p>Password:</p>
        <input className="inpu"
          placeholder='Password'
          type='password'>
        </input><br/>
        <button className="botao rotacao" onClick={notify}>Alter</button>
        <ToastContainer />
      </form>
      </div>
    
    </div>
    </div>
    </body>
    );
};
export default Alter
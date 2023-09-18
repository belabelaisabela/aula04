'use client'
import 'react-toastify/dist/ReactToastify.min.css';
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import styles from './style2.css'


export default function Register() {
    const notificacao =() => toast.error("Usuário cadastrado com sucesso!");
 
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
    <div className="register">
       
      <form >
      <h3>REGISTRAR</h3>
      <hr></hr>
        <p>Name:</p>
        <input className="inpu"
          placeholder='Name'
          type='text'>
        </input>
        <p>E-mail:</p>
        <input className="inpu"
          placeholder='E-mail'
          type='email'>
        </input>
        <p>Password:</p>
        <input className="inpu"
          placeholder='Password'
          type='text'>
        </input>
        <button className="botao rotacao" onClick={notificacao}>Register</button>
      </form>
      <ToastContainer />
      </div>
    
    </div>
    </div>
    </body>
    );
};
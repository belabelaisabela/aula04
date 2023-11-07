'use client'
import 'react-toastify/dist/ReactToastify.min.css';
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import { postUser } from '@/app/functions/handlerAcessAPI';
import styles from './style2.css'


export default function Register() {
  
  const [user, setUser] = useState({
    name: '', email: '', password: ''
  });

  const { push, refresh } = useRouter();

  const handlerFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await postUser(user);
      push('/pages/dashboard');
    } catch {
      return toast.error('Error');
  }

  const success = true;
   if (success) {
      toast.success('Usuário cadastrado com sucesso!');
    } else {
      toast.error('Ocorreu um erro ao cadastrar o usuário.');
    }
  };

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
       
      <form onSubmit={handlerFormSubmit}>
      <h3>REGISTRAR</h3>
      <hr></hr>
        <p>Name:</p>
        <input className="inpu"
          placeholder='Name'
          type='text'
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
          required>
        </input>
        <p>E-mail:</p>
        <input className="inpu"
          placeholder='E-mail'
          type='email'
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          required>
        </input>
        <p>Password:</p>
        <input className="inpu"
          placeholder='Password'
          type='text'
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          required>
        </input>
        <button className="botao rotacao">Register</button>
      </form>
      <ToastContainer />
      </div>
    
    </div>
    </div>
    </body>
    );
};
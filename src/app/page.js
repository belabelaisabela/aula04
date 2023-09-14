'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './page.module.css'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Erro no e-mail ou senha!");
      }
      push('/pages/dashboard');
      
    } catch {
      refresh();
    }
  }
  return (
    <div className="formlogin">
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>
        <input className="inpu"
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input className="inpu"
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button className="botao">Entrar</button>
      </form>
      <ToastContainer />
    </div>
  )
}

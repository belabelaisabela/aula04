'use client'
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './style.css'


export default function App() {
    const handleClick = () =>
      showToast({ type: "success", message: "Mensagem de sucesso" });
    return (
      <>
        <ToastContainer />
        <button onClick={handleClick}>Mostrar toast de sucesso</button>
      </>
    );
  }
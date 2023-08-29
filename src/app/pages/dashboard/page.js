import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import  ListUsers  from "@/app/functions/componentes/ListUsers"

export default async function Dashboard() {
   const listaa = await getUsers()
    return (
    <div>
            <Suspense fallback={<p>Carregando...</p>}>
                <ListUsers users={listaa}/>
            </Suspense>
    </div>
    );
};
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import { ListUsers } from "@/app/functions/componentes/ListUsers"

export default async function Dashboard() {
   const listaa = await getUsers()
    return (
    <div>
            <Suspense fullback={<p>Carregando...</p>}>
                <ListUsers users={users}/>
            </Suspense>
    </div>
    );
};
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import  ListUsers  from "@/app/functions/componentes/ListUsers"


export default async function Dashboard() {
   const listaa = await getUsers()
    return (
    <div>
        <header>
        <ul>
    <li><a href="#">link 1</a></li>
    <li><a href="#">link 2</a></li>
</ul>
        </header>

            <Suspense fallback={<p>Carregando...</p>}>
                <ListUsers users={listaa}/>
            </Suspense>
            
    </div>
    );
};
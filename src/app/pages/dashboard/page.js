import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const listaa = getUsers()
    return (
    <div>
        <div>
            <h1>Dashboard</h1>

        </div>
        <div>
            {listaa.map((user) =>
                <h3>{user.name}</h3>
            )}
        </div>
    </div>
    );
};
'use server'

const url = "https://projetofinalmarcelino.vercel.app"

const getUserAuthenticated = async (user) => {
    const responseOfApi = await fetch(url + "/user/authenticated",
        {
            method:"POST",
            headers:{ "Content-type":"Application/json" },
            body: JSON.stringify(user)
        }
    );
    const userAuth = await responseOfApi.json();
    return userAuth;
}

const postUser = async (user) => {
    try{
        console.log(user)
        const responseOfApi = await fetch(url + "/user", {
            method: 'POST',
            headers: { 'Content-type': 'Application/json' },
           body: JSON.stringify(user) 
        });
        const userSave = await responseOfApi.json();
        return userSave;
    }
    catch {
        return null;
    }
}

const getUsers = async() =>{
    try{
        const responseOfApi = await fetch( url + "/users",{
            next: { revalidate: 5}
        });
        const listUsers = responseOfApi.json()
        return listUsers;
    } catch{
        return null
    }

}

export { getUsers, getUserAuthenticated, postUser };
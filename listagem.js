async function listagem(){

    let token = JSON.parse(localStorage.getItem("user"));
    console.log(token.access_token)

    let api = await fetch("https://go-wash-api.onrender.com/api/auth/address",{
        method:"GET",
        headers: {
                "Content-Type": "application/json", "Authorization": "Bearer "+token.access_token
            }
    });
    if(api.ok){
        let = response = await api.json()
        console.log(response)
    }
}

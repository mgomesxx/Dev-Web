async function login(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    let url = "https://go-wash-api.onrender.com/api/login"

    if(email =='' || senha == ""){
        alert("Campo Obrigatórios!")
        return
    }

    let parametros = 
    {
        email: email,
        password: senha,
        user_type_id: 1}
  
        let api = await fetch(url, {
            method: "POST",
            body: JSON.stringify(parametros),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (api.ok){
            let response = await api.json(); 
            console.log(response);
            alert("Login efetuado com sucesso")
            localStorage.setItem("user", JSON.stringify(response))
            getUserData()
            return
        }
        let responseError = await api.json()
        console.log(responseError)
        }

        
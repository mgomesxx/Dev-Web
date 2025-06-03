async function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('senha').value;



    let user = {
        email: email,
        password: password,
        user_type_id: 1
    }

    let url = "https://go-wash-api.onrender.com/api/login";

    let response =  await fetch(url,{
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        } 
    })

    let api  = await response.json();

    if (response.ok){
        localStorage.setItem('token', api.access_token);
        localStorage.setItem('user', JSON.stringify(api.user));
        console.log(api.user)
        
        alert("Login realizado com sucesso!");
        localStorage.setItem("logado", "true");
        window.location.href = "../html/listagem.html";

    }else if(response.status === 401){
        alert("Usuário não está ativo!")
        console.log(response)

    }else if(response.status === 404){
        alert("Usuário não foi encontrado!")
    }
}

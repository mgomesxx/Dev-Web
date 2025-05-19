async function cadastro(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let dataNascimento = document.getElementById("d_n").value
    let termo = document.getElementById("termo").checked
    let senha = document.getElementById("senha").value
    let cpf_cnpj = document.getElementById("cpf_cnpj").value

    let url = "https://go-wash-api.onrender.com/api/user"

    if(nome =='' || email == ""){
        alert("Verificar Campos Obrigatórios!")
        return
    }
    
    if(termo == false){
        alert("Termo Obrigatório!")
        return
    }

    if(dataNascimento == ''){
        alert('Data de Nascimento Obrigatória')
        return
    }

    if(senha== ""){
        alert('Senha Obrigátoria')
    }
    alert("Cadastro efetuado com sucesso")

    let parametros = 
    {
        "name": nome,
        "email": email,
        "user_type_id": 1,
        "password": senha,
        "cpf_cnpj": cpf_cnpj,
        "terms": 1,
        "birthday": dataNascimento

    }
  
        let api = await fetch(url, {
            method: "POST",
            body: JSON.stringify(parametros),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (api.ok) {
            let response = await api.json(); 
            console.log(response);
        }
        }
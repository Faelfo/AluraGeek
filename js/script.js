function a(){
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if(email == "admin@admin.com" && senha == "123456Aa"){
        window.location.href = "./menu-admin.html";
    }else{
        alert("Acesso negado")
        
    }
}

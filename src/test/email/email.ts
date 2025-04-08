export function validarEmail(email: string){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email)){
        console.log("email valido")
        return true
    }else{
        console.log("email invalido")
        return false
    }
}
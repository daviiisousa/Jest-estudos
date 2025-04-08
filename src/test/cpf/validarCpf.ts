export function validarCpf(cpf: string){
    const cpfRegex = /^(\d{3}\.){2}\d{3}-\d{2}$|^\d{11}$/
    if(cpfRegex.test(cpf)){
        return true
    }else{
        return false
    }
}
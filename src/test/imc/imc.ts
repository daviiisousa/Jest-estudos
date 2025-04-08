export function IMC(pesoKg: number, altura: number): number{
    const peso = pesoKg
    const alturaPessoa = altura
    const imc = peso / (alturaPessoa * alturaPessoa)
    console.log(imc)
    return parseFloat(imc.toFixed(2))
}

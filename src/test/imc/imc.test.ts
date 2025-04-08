import { IMC } from "./imc"

describe("Testando Imc", () => {
    it("Deve retornar um numero flutuante", () => {
        const resultado = IMC(70, 1.74)
        expect(Number.isInteger(resultado)).toBe(false)
    })
})
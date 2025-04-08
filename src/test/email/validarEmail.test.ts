import { validarEmail } from "./validarEmail"

describe("validar email", () => {
    it("deve retornar true para um email valido", () => {
        expect(validarEmail("sousadavi248@gmail.com")).toBe(true)
    })

    it("deve retorna false para um email invalido", () => {
        expect(validarEmail("emailnaovalido")).toBe(false)
    })
})
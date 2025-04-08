import { validarCpf } from "./validarCpf"

describe("Validar CPF", () => {
    it("Deve retorna true para um CPF valido", () => {
        expect(validarCpf("624.717.623-00")).toBe(true)
    })
    
    it("Deve retorna true para um CPF valido sem pontos ou traços", () => {
        expect(validarCpf("62471768300")).toBe(true)
    })

    it("Deve retornar false para um CPF com quantidade de digitos errada", () => {
        expect(validarCpf("624717")).toBe(false)
    })

    it("Deve retorna false para um CPF vazio", () => {
        expect(validarCpf("")).toBe(false)
    })
})
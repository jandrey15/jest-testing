import { sumar, multiplicar, dividir, restar } from '../maths'

describe('Calculos matematicos', () => {
  test('La suma debe ser 10 :D', () => {
    expect(sumar(3, 7)).toBe(10)
  })

  test('La multiplicación debe ser 50 :D', () => {
    expect(multiplicar(10, 5)).toBe(50)
  })

  test('La division debe ser 4 :D', () => {
    expect(dividir(8, 2)).toBe(4)
  })

  test('La resta debe ser 10 :D', () => {
    expect(restar(20, 10)).toBe(10)
  })
})

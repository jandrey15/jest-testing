import { sumar } from '../maths'

describe('Calculos matematicos', () => {
  test('La suma debe ser 10 :D', () => {
    expect(sumar(3, 7)).toBe(10)
  })
})

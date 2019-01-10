import { numbers } from '../numbers'

describe('Comparar numbers', () => {
  test('Mayor que', () => {
    expect(numbers(2, 5)).toBeGreaterThan(4)
  })

  test('Mayor que o igual', () => {
    expect(numbers(2, 5)).toBeGreaterThanOrEqual(7)
  })

  test('Menor que', () => {
    expect(numbers(2, 5)).toBeLessThan(20)
  })

  test('Menor que o igual', () => {
    expect(numbers(2, 5)).toBeLessThanOrEqual(20)
  })

  test('Números flotantes', () => {
    expect(numbers(2.5, 2.5)).toBeLessThanOrEqual(5)
  })
})
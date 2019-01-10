import { isNull, isTrue, isFalse, isUndefined } from '../true'

describe('Probar resultados nulos', () => {
  test('Is null', () => {
    expect(isNull()).toBeNull()
  })
})

describe('Probar resultados verdaderos', () => {
  test('Is true', () => {
    expect(isTrue()).toBeTruthy()
  })
})

describe('Probar resultados falsos', () => {
  test('Is false', () => {
    expect(isFalse()).toBeFalsy()
  })
})

describe('Probar resultados undefined', () => {
  test('Is undefined', () => {
    expect(isUndefined()).toBeUndefined()
  })
})

describe('Probar resultados verdaderos o falsos', () => {
  test('Is true o false', () => {
    expect(isFalse()).not.toBeFalsy()
  })
})

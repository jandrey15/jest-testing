import { arrayFruits, arrayColors } from '../arrays'

describe('Comprobaremos que existe un elemento', () => {
  test('¿Tiene una manzana?', () => {
    expect(arrayFruits()).toContain('manzana')
  })

  test('No tiene un platano', () => {
    expect(arrayFruits()).not.toContain('platano')
  })

  test('Comprobar el tamaño de un array', () => {
    expect(arrayFruits()).toHaveLength(6)
  })

  test('Comprobar que existe el color rojo', () => {
    expect(arrayColors()).toContain('rojo')
  })
})

import { getData } from '../promise'

describe('Probando promises', () => {
  test('Request a una API', (done) => {
    const api = 'https://rickandmortyapi.com/api/character'
    getData(api).then(data => {
      expect(data.results.length).toBeGreaterThan(5)
      done()
    })
  })

  test('Resuelve un Hola', () => {
    return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!')
  })

  test('Rechaza con un error', () => {
    return expect(Promise.reject('Error')).rejects.toBe('Error')
  })
})

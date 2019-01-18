import { getData } from '../promise'

describe('Probar Async/Await', () => {
  test('Realizar una request a una API', async () => {
    const api = 'https://rickandmortyapi.com/api/character'
    const getRick = 'https://rickandmortyapi.com/api/character/1'

    const data = await getData(api)
    expect(data.results.length).toBeGreaterThan(5)

    const data2 = await getData(getRick)
    expect(data2.name).toEqual('Rick Sanchez')
  })

  test('Request a una API con error', async () => {
    try {
      const apiError = 'http://httpstat.us/404'
      await getData(apiError)
    } catch(error) {
      expect(error).toEqual(Error('Request failed with status code 404'))
    }
  })

  test('Resuelve un Hola', async () => {
    await expect(Promise.resolve('Hola')).resolves.toBe('Hola')
    await expect(Promise.reject('Error')).rejects.toBe('Error')
  })
})

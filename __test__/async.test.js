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
})

import { callbackHell } from '../callbacks'

describe('Probando un callback', () => {
  test('Callback', (done) => {
    function other(data) {
      expect(data).toBe('Hola mundo :D')
      done()
    }

    callbackHell(other)
  })
})
describe('Comparadores comunes', () => {
  const user = {
    name: 'John',
    lastname: 'Serrano'
  }

  const user2 = {
    name: 'John',
    lastname: 'Serrano C'
  }

  test('igualdad de elementos', () => {
    expect(user).toEqual(user2)
  })

  test('No son iguales los elementos', () => {
    expect(user).not.toEqual(user2)
  })
})
beforeAll(async () => {
    await page.goto('http://localhost:3000')
})

test('App.js is running', async () => {
    const content = await page.textContent('body')
    expect(await page.textContent('body')).toContain('Edit src/App.js and save')
})

describe('saying hello', () => {
  test('name is empty', async () => {
    const name = await page.textContent('input#name')
    expect(name).equals('')
  })
})

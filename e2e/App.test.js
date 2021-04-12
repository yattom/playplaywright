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
    expect(name).toBe('')
  })

  test('user will be greeted after entering her name', async () => {
    await page.fill('#name', 'John Smith')
    await page.click('button#say_hello')
    expect(await page.textContent('body')).toContain('Hi, John Smith!')
  })

  test('user will be greeted after entering her name', async () => {
    await page.fill('#name', 'Mary Smith')
    await page.click('button#say_hello')
    expect(await page.textContent('body')).toContain('Hi, Mary Smith!')
  })
})


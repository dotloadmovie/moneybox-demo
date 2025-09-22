import { test, expect, Page } from '@playwright/test'

test.describe('Frontend', () => {
  let page: Page

  test.beforeAll(async ({ browser }, testInfo) => {
    const context = await browser.newContext()
    page = await context.newPage()
  })

  test('page has correct title', async ({ page }) => {
    await page.goto('http://localhost:3000')

    await expect(page).toHaveTitle(/Moneybox Products/)

    const heading = page.locator('h1').first()

    await expect(heading).toHaveText('Explore accounts')
  })


  test('page has link to login', async ({ page }) => {
    await page.goto('http://localhost:3000')

    const anchor = page.locator('a[rel="external"]').first()

    await expect(anchor).toHaveText('Log in')
  })


  test('page has 5 blocks', async ({ page }) => {
    await page.goto('http://localhost:3000')

    const carouselElements = page.locator('article').all();

    await expect((await carouselElements).length).toEqual(5)
  })

  
})

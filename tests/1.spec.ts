import { test, expect, Page } from '@playwright/test'

test('1', async () => {
  console.log('1')
})

test('2', async () => {
  expect(1).toBe(2)
  console.log('2')
})

test('3', async () => {
  console.log('3')
})

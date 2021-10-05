import { test, expect, Page } from '@playwright/test'

test('A', async () => {
  console.log('A')
})

test('B', async () => {
  const long = () => {
    return new Promise(resolve => { setTimeout(() => resolve(true), 4000) })
  }
  await long()
  console.log('B')
})

test('C', async () => {
  console.log('C')
})

import { test, expect, Page } from '@playwright/test'

test('a', async () => {
  console.log('a')
})

test('b', async () => {
  const long = () => {
    return new Promise(resolve => { setTimeout(() => resolve(true), 1000) })
  }
  await long()
  console.log('b')
})

test('c', async () => {
  console.log('c')
})

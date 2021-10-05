import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  retries: 1,
  maxFailures: 2,
  workers: 1,
}

export default config

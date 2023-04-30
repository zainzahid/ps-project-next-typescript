import { expect } from '@playwright/test';
import test from './next-fixture';

/// <reference types="playwright" />
/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />
/// Verify the user journey through the Geographic Thin Match Flow
test('geo thin match journey', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // fill out search fields
  await page.getByTestId('search-firstName').fill('John');
  await page.getByTestId('search-lastName').fill('Doe');
  await page.getByTestId('search-state').selectOption('CA');
  await page.getByTestId('search-submit').click();

  // verify we are get moved to the loader
  expect(page.url()).toContain('/searching');
  // verify we are moved to the SUP Page
});
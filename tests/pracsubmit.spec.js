import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://live.origamirisk.com/Origami/Account/Login?ReturnUrl=%2fOrigami%2fProposals%2fInterview');
});
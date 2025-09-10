import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://live.origamirisk.com/Origami/Account/Login?account=Mission_PreProd&returnUrl=%2FOrigami');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('shan56');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('shantest');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  
 
});
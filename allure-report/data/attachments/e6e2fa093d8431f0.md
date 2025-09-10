# Test info

- Name: test
- Location: C:\Users\sbasheer\Playwrightautomation\tests\submitquote.spec.js:3:5

# Error details

```
Error: frame.fill: Test ended.
Call log:
  - waiting for locator('input[id=\'Name\']')

    at C:\Users\sbasheer\Playwrightautomation\tests\submitquote.spec.js:32:8
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('test', async ({ page }) => {
   4 |   await page.goto('https://preprod.origamirisk.com/Origami/Account/Login?account=Mission_Pre_Prod');
   5 |   await page.getByRole('textbox', { name: 'User Name' }).click();
   6 |   await page.getByRole('textbox', { name: 'User Name' }).fill('rennel.nayan@rcggs.com');
   7 |   await page.getByRole('textbox', { name: 'Password' }).click();
   8 |   await page.getByRole('textbox', { name: 'Password' }).fill('@04TestTest2025');
   9 |   await page.getByRole('button', { name: 'Login' }).click();
  10 |   await page.waitForTimeout(5000);
  11 |   // Home page
  12 |   await page.getByText('In preparation for the').click();
  13 |   //await page.getByText('This is TIGER, refreshed from').click();
  14 |   await page.getByRole('textbox', { name: 'Name' }).click();
  15 |   await page.getByRole('textbox', { name: 'Name' }).fill('indigo');
  16 |   await page.getByRole('button', { name: 'Initiate Search' }).click();
  17 |   await page.getByLabel('Clients Data Grid').getByRole('link', { name: 'Indigo' }).click();
  18 |   await page.getByRole('link', { name: 'New Submission' }).click();
  19 |  // await page.waitForTimeout(4000);
  20 |   await page.getByRole('link', { name: 'Indigo Primary MPL' }).click();
  21 |   //information page
  22 |   //await page.waitForSelector('#rbCustomCode14ID0');
  23 |   await page.waitForTimeout(3000);
  24 |   await page.locator('#rbCustomCode14ID0').click();
  25 |  // await page.getByRole('listitem').filter({ hasText: 'Insured:' }).getByRole('button').click();
  26 |  //await page.waitForTimeout(2000);
  27 |  await page.click("button[alt='MemberID']");
  28 |  //await page.waitForTimeout(3000);
  29 |  //Frames
  30 |  const frame =await page.frame('dialogFrame');
  31 |  //await page.waitForTimeout(50000);
> 32 |  frame.fill("input[id='Name']",'Automation IndigoSmoke 19/05/2025 21:18:55');
     |        ^ Error: frame.fill: Test ended.
  33 |  //await page.waitForTimeout(50000);
  34 |  //await page.getByText('Automation IndigoSmoke 19/05/2025 21:18:55').click();
  35 |  //await page.click("input[id='Name']");
  36 |  //await page.fill("input[id='Name']",'Automation IndigoSmoke 19/05/2025 21:18:55');
  37 | //await page.fill("#",'Automation IndigoSmoke 19/05/2025 21:18:55');
  38 |  //frame.click("button[aria-label='Initiate Search']");
  39 |
  40 |
  41 |  /* //await page.fill("input[alt='Member']",'Automation IndigoSmoke 19/05/2025 21:18:55');
  42 |  await page.waitForTimeout(1000);
  43 |  await page.getByText('Automation IndigoSmoke 19/05/2025 21:18:55').click();
  44 |   //await page.waitForTimeout(5000);
  45 |   await page.selectOption('//select[@name="Member.StateID"]', 'California');
  46 |   await page.selectOption('//select[@name="StateID"]', 'California');
  47 |   await page.getByLabel('Quoting Process Status').selectOption('69793');
  48 |   await page.fill("input[id='AgentID']",'Baber, Sarah');
  49 |   //await page.fill("input[name='__origamilookupdescription_AgentID']",'Collins, Philip');
  50 |   await page.selectOption('//select[@name="CustomCode15ID"]','Individual');
  51 |   await page.locator('#useraction_next').click();
  52 |   //clearance
  53 |   await page.getByLabel('Duplicate Proposal Override').selectOption('True');
  54 |   await page.locator('#useraction_next').click();
  55 |   //coverages
  56 |   await page.fill("input[aria-label='Area of Practice']",'Accounting Service - Audit/Attest');
  57 |   await page.fill("input[name='Coverage_E&O.CustomNumber3']",'2021');
  58 |   //Loss of information*/
  59 |   
  60 |   
  61 | })
```
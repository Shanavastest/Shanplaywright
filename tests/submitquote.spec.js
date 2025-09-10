import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://preprod.origamirisk.com/Origami/Account/Login?account=Mission_Pre_Prod');
  await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.getByRole('textbox', { name: 'User Name' }).fill('rennel.nayan@rcggs.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('@04TestTest2025');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(5000);
  // Home page
  await page.getByText('In preparation for the').click();
  //await page.getByText('This is TIGER, refreshed from').click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('indigo');
  await page.getByRole('button', { name: 'Initiate Search' }).click();
  await page.getByLabel('Clients Data Grid').getByRole('link', { name: 'Indigo' }).click();
  await page.getByRole('link', { name: 'New Submission' }).click();
 // await page.waitForTimeout(4000);
  await page.getByRole('link', { name: 'Indigo Primary MPL' }).click();
  //information page
  //await page.waitForSelector('#rbCustomCode14ID0');
  await page.waitForTimeout(3000);
  await page.locator('#rbCustomCode14ID0').click();
 // await page.getByRole('listitem').filter({ hasText: 'Insured:' }).getByRole('button').click();
 //await page.waitForTimeout(2000);
 await page.click("button[alt='MemberID']");
 //await page.waitForTimeout(3000);
 //Frames
 const frame =await page.frame('dialogFrame');
 //await page.waitForTimeout(50000);
 await frame.fill("input[id='Name']",'Automation IndigoSmoke 19/05/2025 21:18:55');
 //await page.waitForTimeout(50000);
 //await page.getByText('Automation IndigoSmoke 19/05/2025 21:18:55').click();
 //await page.click("input[id='Name']");
 //await page.fill("input[id='Name']",'Automation IndigoSmoke 19/05/2025 21:18:55');
//await page.fill("#",'Automation IndigoSmoke 19/05/2025 21:18:55');
 //frame.click("button[aria-label='Initiate Search']");


 /* //await page.fill("input[alt='Member']",'Automation IndigoSmoke 19/05/2025 21:18:55');
 await page.waitForTimeout(1000);
 await page.getByText('Automation IndigoSmoke 19/05/2025 21:18:55').click();
  //await page.waitForTimeout(5000);
  await page.selectOption('//select[@name="Member.StateID"]', 'California');
  await page.selectOption('//select[@name="StateID"]', 'California');
  await page.getByLabel('Quoting Process Status').selectOption('69793');
  await page.fill("input[id='AgentID']",'Baber, Sarah');
  //await page.fill("input[name='__origamilookupdescription_AgentID']",'Collins, Philip');
  await page.selectOption('//select[@name="CustomCode15ID"]','Individual');
  await page.locator('#useraction_next').click();
  //clearance
  await page.getByLabel('Duplicate Proposal Override').selectOption('True');
  await page.locator('#useraction_next').click();
  //coverages
  await page.fill("input[aria-label='Area of Practice']",'Accounting Service - Audit/Attest');
  await page.fill("input[name='Coverage_E&O.CustomNumber3']",'2021');
  //Loss of information*/
  
  
})
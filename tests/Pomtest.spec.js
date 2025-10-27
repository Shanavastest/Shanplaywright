import { test, expect } from '@playwright/test';
import { Loginpage } from './pages/Loginpage';
import { HomePage } from './pages/Homepage';
import { Cartpage } from './pages/Cartpage';



test('test', async ({ page }) => {

    //Login
    const login = new Loginpage(page);
    await login.gotoLoginPage();
    await login.login()
    await page.waitForTimeout(3000);

    //Home
    const home = new HomePage(page);
    await home.addProductToCart("Nexus 6")
    await page.waitForTimeout(3000)
    await home.gotoCart();

    //Cart
    //const cart =new Cartpage(page)
    //await page.waitForTimeout(3000)
    //const status = await cart.checkProductInCart('Nexus');
    //expect(await status).toBe(true);


});
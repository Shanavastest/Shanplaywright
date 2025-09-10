# Test info

- Name: test
- Location: C:\Users\sbasheer\Playwrightautomation\tests\Pomtest.spec.js:7:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: undefined
    at C:\Users\sbasheer\Playwrightautomation\tests\Pomtest.spec.js:25:26
```

# Page snapshot

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: "#"
    - listitem
    - listitem:
      - link "Log out":
        - /url: "#"
    - listitem:
      - link "Welcome shan12":
        - /url: "#"
    - listitem
- heading "Products" [level=2]
- table:
  - rowgroup:
    - row "Pic Title Price x":
      - cell "Pic"
      - cell "Title"
      - cell "Price"
      - cell "x"
  - rowgroup:
    - row "Nexus 6 650 Delete":
      - cell:
        - img
      - cell "Nexus 6"
      - cell "650"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
    - row "Nexus 6 650 Delete":
      - cell:
        - img
      - cell "Nexus 6"
      - cell "650"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
    - row "Nexus 6 650 Delete":
      - cell:
        - img
      - cell "Nexus 6"
      - cell "650"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
    - row "Nexus 6 650 Delete":
      - cell:
        - img
      - cell "Nexus 6"
      - cell "650"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
    - row "Nexus 6 650 Delete":
      - cell:
        - img
      - cell "Nexus 6"
      - cell "650"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
- heading "Total" [level=2]
- heading "3250" [level=3]
- button "Place Order"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store 2017
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { Loginpage } from './pages/Loginpage';
   3 | import { HomePage } from './pages/Homepage';
   4 | import { Cartpage } from './pages/Cartpage';
   5 |
   6 |
   7 | test('test', async ({ page }) => {
   8 |
   9 |     //Login
  10 |     const login = new Loginpage(page);
  11 |     await login.gotoLoginPage();
  12 |     await login.login('shan12', 'nasishan')
  13 |     await page.waitForTimeout(3000);
  14 |
  15 |     //Home
  16 |     const home = new HomePage(page);
  17 |     await home.addProductToCart("Nexus 6")
  18 |     await page.waitForTimeout(3000)
  19 |     await home.gotoCart();
  20 |
  21 |     //Cart
  22 |     const cart =new Cartpage(page)
  23 |     await page.waitForTimeout(3000)
  24 |     const status = await cart.checkProductInCart('Nexus');
> 25 |     expect(await status).toBe(true);
     |                          ^ Error: expect(received).toBe(expected) // Object.is equality
  26 |
  27 |
  28 | });
```
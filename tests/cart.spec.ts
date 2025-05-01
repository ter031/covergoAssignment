import { test } from '@playwright/test';
import { login } from '../utils/HelperFunctions';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { TestData } from '../utils/TestData';

test.describe('Cart Functionality', () => {
    let inventoryPage: InventoryPage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        await login(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
    });

    test('Verify Checkout button is enabled on cart page', async ({ page }) => {
        // Go to cart page
        await inventoryPage.goToCart();
        await cartPage.verifyCartPage();

        // Verify Checkout button is visible and enabled
        await cartPage.verifyCheckoutButton();
    });

    test('Verify user can navigate back to inventory page by clicking on Continue Shopping', async ({ page }) => {
        // Go to cart page
        await inventoryPage.goToCart();
        await cartPage.verifyCartPage();

        // Navigate back to the inventory page by clicking on Continue Shopping button and verify
        await cartPage.goBackToInventoryPage();
        await page.waitForURL(TestData.URLS.INVENTORY_PAGE);
    });
});
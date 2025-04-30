import { test, expect } from '@playwright/test';
import { login } from '../utils/HelperFunctions';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

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
});